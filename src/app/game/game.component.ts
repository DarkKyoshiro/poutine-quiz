import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Answer } from '../models/answer.model';
import { MenuDistribution } from '../models/menuDistribution.model';
import { Question } from '../models/question.model';
import { Team } from '../models/team.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { TeamScoreDetailComponent } from '../team-score-detail/team-score-detail.component';
import { Observable, Subject, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, OnDestroy {
  questions: Question[] = [];
  menuDistribution: MenuDistribution[] = [];
  questionID: number = 0;
  teamName!: string;
  group1!: number;
  group2!: number;
  teams: Team[] = [];
  pointsBet: number = 0;
  answer!: string;
  fullAnswer!: Answer;
  answers: Answer[] = [];
  control: boolean = false;
  lockSpeed: boolean = true;
  interval$!: Observable<number>;
  timer: number = 30;
  timerActive: boolean = false;
  betActive: boolean = true;
  private destroy$!: Subject<boolean>;

  constructor(
    private socket: Socket,
    private route: ActivatedRoute,
    private router: Router,
    private matBottomSheet: MatBottomSheet
  ) {}

  ngOnInit(): void {
    //------------------------------------------------------------------------------------
    //---------------------- Timer management --------------------------------------------
    //------------------------------------------------------------------------------------
    //Initiate variables
    this.destroy$ = new Subject<boolean>();
    this.interval$ = timer(0, 1000);

    //Timer server management
    this.socket.on('startTimer', () => {
      this.timerActive = true;
      //Timer process
      this.interval$.pipe(takeUntil(this.destroy$)).subscribe(() => {
        if (this.timerActive && this.timer > 0) {
          this.timer--;
        }
        if (this.timer === 0) {
          this.timerActive = false;
          this.destroy$.next(true);
          if (!this.getReponse()) {
            this.onAnswer(
              this.answer === ''
                ? '#!Timeout!#'
                : '#!Timeout!# - (' + this.answer + ')'
            );
          }
        }
      });
    });

    this.socket.on('pauseTimer', () => {
      this.timerActive = false;
      this.destroy$.next(true);
    });

    this.socket.on('resetTimer', (duration: number) => {
      this.timerActive = false;
      this.timer = duration;
    });

    this.socket.on('extendTimer', (duration: number) => {
      this.timer += duration;
    });

    this.socket.on('betLocked', (betActive: boolean) => {
      this.betActive = betActive;
    });

    //------------------------------------------------------------------------------------
    //---------------------- Team management ---------------------------------------------
    //------------------------------------------------------------------------------------
    //Initiate variables
    this.teamName = this.route.snapshot.params['team'].trim();

    //User management
    this.socket.emit('new-connection', this.teamName);
    this.socket.emit('refresh-group', this.teamName);
    this.socket.on('send-group', (group1: any, group2: any) => {
      this.group1 = group1;
      this.group2 = group2;
    });

    //If teamname is already taken
    this.socket.on('user-rejected', () => {
      this.router.navigateByUrl('/rejected');
    });

    //Forced disconnection
    this.socket.on('team-disconnection', (teamName: string) => {
      if (
        this.teamName.replace(/\s+/g, '').toLowerCase() ===
        teamName.replace(/\s+/g, '').toLowerCase()
      ) {
        this.router.navigateByUrl('/disconnected');
      }
    });

    //Teams refreshment
    this.socket.on('send-teams', (data: any) => {
      this.teams = Object.keys(data).map((key) => data[key]);
      this.teams = this.teams.sort((a, b) => (b.name < a.name ? 1 : -1));
      this.teams = this.teams.sort((a, b) => b.score - a.score);
    });

    this.socket.on('send-menu-groups', (menuTeamGroup: any[]) => {
      this.menuDistribution = Object.keys(menuTeamGroup).map(
        (key: any) => menuTeamGroup[key]
      );
    });

    this.socket.emit('refresh-questions');
    this.socket.on('send-questions', (data: any[]) => {
      this.questions = data;
    });

    this.socket.emit('refresh-question-ID');
    this.socket.on('update-question-ID', (data: number) => {
      this.answer = '';
      this.questionID = data;
      this.pointsBet = this.getPoints()[3];
    });

    this.socket.emit('refresh-answers');
    this.socket.on('get-answers', (data: any[]) => {
      this.answers = [];
      this.answers = data;
    });

    this.socket.on('get-answers-team', (data: any[]) => {
      this.answers = [];
      this.answers = data;
    });

    //Settings update
    this.socket.on('change-lock-speed', (lockState: boolean) => {
      this.lockSpeed = lockState;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  onAnswer(sentAnswer: any): void {
    //if(sentAnswer) {
    this.answer = sentAnswer;
    this.fullAnswer = {
      teamName: this.teamName,
      questionID: this.questionID,
      answer: sentAnswer,
      timestamp: Date.now(),
      correct: -1,
      pointsBet: this.pointsBet,
      points: 0,
      bonusWrongAnswers: 0,
      bonusSpeed: 0,
      bonus: 0,
    };

    this.socket.emit('send-answer', this.fullAnswer);
    //}
  }

  getReponse(): boolean {
    this.control = false;
    this.answers.forEach((element) => {
      if (
        element.questionID === this.questionID &&
        element.teamName.replace(/\s+/g, '').toLowerCase() ===
          this.teamName.replace(/\s+/g, '').toLowerCase() &&
        element.answer !== ''
      ) {
        this.control = true;
      }
    });
    return this.control;
  }

  getAnswer(): string {
    let returnedAnswer: string = "Vous n'avez rien répondu encore...";
    this.answers.forEach((element) => {
      if (
        element.questionID === this.questionID &&
        element.teamName.replace(/\s+/g, '').toLowerCase() ===
          this.teamName.replace(/\s+/g, '').toLowerCase() &&
        element.answer !== '' &&
        element.answer !== '#!Timeout!#'
      ) {
        returnedAnswer = 'Vous avez répondu ' + element.answer;
        if (element.correct === 1) {
          returnedAnswer = returnedAnswer + ' - Correct';
        } else if (element.correct === 0) {
          returnedAnswer = returnedAnswer + ' - Incorrect';
        }
      }
    });
    return returnedAnswer;
  }

  getScore(teamName: string): number {
    let score: number = 0;
    this.teams.forEach((team) => {
      if (
        team.name.replace(/\s+/g, '').toLowerCase() ===
        teamName.replace(/\s+/g, '').toLowerCase()
      ) {
        score = team.score;
      }
    });
    return score;
  }

  getQuestion(id: number): Question {
    if (id < 0) {
      id = 0;
    }
    return this.questions[id];
  }

  getPoints(): number[] {
    let points: number[] = [0, 0, 0, 0, 0];
    this.answers.forEach((element) => {
      if (
        element.questionID === this.questionID &&
        element.teamName.replace(/\s+/g, '').toLowerCase() ===
          this.teamName.replace(/\s+/g, '').toLowerCase()
      ) {
        points = [
          element.points,
          element.bonusSpeed,
          element.bonusWrongAnswers,
          element.bonus,
          element.pointsBet,
        ];
      }
    });
    return points;
  }

  isMenu(): boolean {
    let round: number = this.getQuestion(this.questionID - 1).round;
    let group: any = this.getQuestion(this.questionID - 1).group;
    let teamGroup = -1;
    this.menuDistribution.forEach((menu) => {
      if (menu.menuNb === group && menu.round === round) {
        teamGroup = menu.teamGroup;
      }
    });

    if (round === 1) {
      return this.group1 === teamGroup ? true : false;
    } else if (round === 2) {
      return this.group2 === teamGroup ? true : false;
    } else {
      return false;
    }
  }

  onScoreDetailTrigger(): void {
    this.matBottomSheet.open(TeamScoreDetailComponent, {
      data: {
        teamName: this.teamName.replace(/\s+/g, '').toLowerCase(),
        score: this.getScore(this.teamName.replace(/\s+/g, '').toLowerCase()),
      },
    });
  }

  getRanks(teamName: string): number {
    let teamsArray: number[] = [];
    let sortedArray: number[] = [];
    let rankings: number[] = [];

    let i: number = 0;
    let teamIndex: number = 0;

    this.teams.forEach((team) => {
      teamsArray.push(team.score);
      if (
        team.name.replace(/\s+/g, '').toLowerCase() ===
        teamName.replace(/\s+/g, '').toLowerCase()
      ) {
        teamIndex = i;
      }
      i++;
    });

    sortedArray = teamsArray.slice().sort((a, b) => {
      return b - a;
    });
    rankings = teamsArray.map((v) => {
      return sortedArray.indexOf(v) + 1;
    });

    return rankings[teamIndex];
  }

  // getGroup(teamName: string): number {
  //   let tempGroup: number = 0;
  //   this.teams.forEach(element => {
  //     if(element.name === teamName) {
  //       tempGroup = element.group
  //     }
  //   });

  //   return tempGroup
  // }
}
