import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Answer } from '../models/answer.model';
import { Question } from '../models/question.model';
import { Team } from '../models/team.model';
import { QuestionsService } from '../services/questions.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MenuDistribution } from '../models/menuDistribution.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  questionID: number = 0;
  negativePoints: boolean = false;
  bonusesWrongAnswers: boolean = true;
  teamThreshold: number = 0;
  teamThresholdModifier: number = 0;
  percentErrorsTiers: number[] = [];
  bonusWrong: number[] = [];
  questions: Question[] = [];
  menuDistribution: MenuDistribution[] = [];
  teams: Team[] = [];
  answers: Answer[] = [];
  resetCheck: boolean = false;
  durationInSeconds: number = 2;
  questionType: string = 'Nugget';

  columnsToDisplay: string[] = ['logged', 'name', 'score', 'group1', 'group2', 'loggedManagement'];
  columnsToDisplay2: string[] = ['round', 'menuNb', 'teamGroup', 'groupManagement'];

  constructor(
    private socket: Socket, 
    private questionsService: QuestionsService,
    private router: Router,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {

    //------------------------------------------------------------------------------------
    //---------------------- Teams management --------------------------------------------
    //------------------------------------------------------------------------------------
    this.socket.emit('new-admin-connection');

    //Teams refreshment
    this.socket.on('send-teams', (data: any) => {
      this.teams = Object.keys(data).map(key => data[key]);
      this.teams = this.teams.sort((a, b) => b.name < a.name ? 1 : -1);
      this.teams = this.teams.sort((a, b) => b.score - a.score);
    });

    //If admin is already logged
    this.socket.on('user-rejected', () => {
      this.router.navigateByUrl('/rejected');
    })

    //------------------------------------------------------------------------------------
    //---------------------- Questions management ----------------------------------------
    //------------------------------------------------------------------------------------
    this.socket.emit('refresh-questions')
    this.socket.on('send-questions', (data: any[]) => {
      this.questions = data
    })

    this.socket.on('send-menu-groups', (menuTeamGroup: any[]) => {
      this.menuDistribution = Object.keys(menuTeamGroup).map((key: any) => menuTeamGroup[key]);
    })

    this.socket.emit('refresh-question-ID')
    this.socket.on('update-question-ID', (data: number) => {this.questionID = data})

    this.socket.emit('refresh-scoreSettings')
    this.socket.on('update-scoreSettings', (negPts: boolean, bonuses: boolean, threshold: number, thresholdModifier: number, percentErrorsTiers: number[], bonusWrong: number[]) => {
      this.negativePoints = negPts
      this.bonusesWrongAnswers = bonuses
      this.teamThreshold = threshold
      this.teamThresholdModifier = thresholdModifier
      this.percentErrorsTiers = percentErrorsTiers
      this.bonusWrong = bonusWrong
    })

    //------------------------------------------------------------------------------------
    //---------------------- Answers management ------------------------------------------
    //------------------------------------------------------------------------------------
    this.socket.emit('refresh-answers')
    this.socket.on('get-answers', (data: any) => {
      this.answers = [];
      this.answers = data;
      // this.answers = this.answers.sort((a, b) => a.timestamp - b.timestamp);
      //this.answers = this.answers.sort((a, b) => b.correct - a.correct);
    })
  }

  onChangeGroup(round: number, teamName: string, teamGroup: number): void {
    this.socket.emit('update-team-group', round, teamName, teamGroup);
  }

  onChangeMenuGroup(menuNb: number, round: number, teamGroup: number): void {
    this.socket.emit('update-menu-team-group', menuNb, round, teamGroup);
  }

  onDisconnect(teamName: string): void {
    this.socket.emit('disconnect-team', teamName);
  }

  onEject(teamName: string): void {
    this.socket.emit('eject-team', teamName);
  }

  onStartQuiz(): void {
    this.socket.emit('start-quiz', this.questionsService.questions)
  }

  onResetQuiz(): void {
    this.resetCheck = true
  }

  onYesResetQuiz(): void {
    this.socket.emit('reset-quiz')
    this.resetCheck = false
  }

  onNoResetQuiz(): void {
    this.resetCheck = false
  }

  onQuestion(id: number): void {
    this.socket.emit('go-to-question', id)
    this._snackBar.open(this.questions[id-1].type + " #" + this.questions[id-1].id + " loaded", "OK", {
      duration: this.durationInSeconds * 1000
    });
  }

  onPrevious(id: number): void {
    if(id >= 0) {
      this.socket.emit('go-to-question', id);
    }
  }

  onNext(id: number): void {
    if(id <= this.questions.length + 1) {
      this.socket.emit('go-to-question', id);
    }
  }

  onPreviousStep(step: number): void {
    this.socket.emit('go-to-step', step);
  }

  onNextStep(step: number): void {
    this.socket.emit('go-to-step', step);
  }

  onCorrection(): void {
    this.socket.emit('question-correction')
  }

  onValidAnswer(teamName: string, questionID: number, answerState: number): void {
    this.socket.emit('valid-answer', teamName, questionID, answerState)
  }

  onBonus(teamName: string, questionID: number, bonus: number): void {
    this.socket.emit('bonus-answer', teamName, questionID, bonus)
  }

  onClear(teamName: string, questionID: number): void {
    this.socket.emit('clear-answer', teamName, questionID)
  }

  getAnswers(questionID: number): Answer[] {
    let newAnswers: Answer[] = []
    this.answers.forEach(answer => {
      if(answer.questionID === questionID) {
        newAnswers.push(answer)
      }
    })
    return newAnswers
  }

  onSave(): void {
    this.socket.emit('save')
    this._snackBar.open("Data saved!", "OK", {
      duration: this.durationInSeconds * 1000
    });
  }

  onReload(): void {
    this.socket.emit('reload')
    this._snackBar.open("Data reloaded!", "OK", {
      duration: this.durationInSeconds * 1000
    });
  }

  onChangeNegPoints(): void {
    this.socket.emit('change-negative-points', this.negativePoints)
  }

  onChangeBonusesWrongAnswers(): void {
    this.socket.emit('change-bonuses-wrong-answers', this.bonusesWrongAnswers)
  }

  onChangeTreshold(): void {
    this.socket.emit('change-threshold', this.teamThreshold)
  }

  onChangeTresholdModifier(): void {
    this.socket.emit('change-threshold-modifier', this.teamThresholdModifier)
  }

  onChangePercentError(): void {
    this.socket.emit('change-percent-error', this.percentErrorsTiers)
  }

  onChangeBonuses(id: number, bonus: number): void {
    this.bonusWrong[id] = bonus
    this.socket.emit('update-bonuses', this.bonusWrong)
  }

  getRanks(teamName: string): number {
    let timestampArray: number[] = []
    let sortedArray: number[] = []
    let rankings: number[] = []

    let i: number = 0
    let teamIndex: number = 0

    this.answers.forEach(answer => {
      if(answer.questionID === this.questionID) {
        timestampArray.push(answer.timestamp)
        if(answer.teamName === teamName) { teamIndex = i }
        i++
      }
    })

    sortedArray = timestampArray.slice().sort((a,b) => { return a-b })
    rankings = timestampArray.map((v) => { return sortedArray.indexOf(v)+1 })

    return rankings[teamIndex]
  }

  getTeamScore(teamName: string): number {
    let score: number = 0;

    this.teams.forEach(team => {
      if(team.name === teamName) {
        score = team.score
      }
    })
    
    return score;
  }

  isMenuActive(teamName: string): boolean {
    if(!this.questions[this.questionID - 1].group) {
      return false
    } else {
      let round: number = this.questions[this.questionID - 1].round
      let menuNb: any = this.questions[this.questionID - 1].group
      let teamGroup: number = -1
      let teamGroup1: number = -2
      let teamGroup2: number = -2

      this.menuDistribution.forEach(menu => {
        if(menu.menuNb === menuNb && menu.round === round) {teamGroup = menu.teamGroup}
      })

      this.teams.forEach(team => {
        if(team.name === teamName) {
          teamGroup1 = team.group1
          teamGroup2 = team.group2
        }
      })

      if(round === 1) {
        return (teamGroup === teamGroup1)
      } else if(round === 2) {
        return (teamGroup === teamGroup2)
      } else {
        return false
      }
    }
  }
}
