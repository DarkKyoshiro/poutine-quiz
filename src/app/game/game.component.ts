import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Answer } from '../models/answer.model';
import { MenuDistribution } from '../models/menuDistribution.model';
import { Question } from '../models/question.model';
import { Team } from '../models/team.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  questions!: Question[];
  menuDistribution: MenuDistribution[] = [];
  questionID: number = 0;
  teamName!: string;
  group1!: number;
  group2!: number;
  teams: Team[] = [];
  answer!: string;
  fullAnswer!: Answer;
  answers: Answer[] = [];
  control: boolean = false;
  showScores: boolean = false;

  constructor(
    private socket: Socket,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.teamName = this.route.snapshot.params['team'];

    //User management
    this.socket.emit('new-connection', this.teamName);
    this.socket.emit('refresh-group', this.teamName);
    this.socket.on('send-group', (group1: any, group2: any) => {
      this.group1 = group1
      this.group2 = group2
    })

    //If teamname is already taken
    this.socket.on('user-rejected', () => {
      this.router.navigateByUrl('/rejected');
    })

    //Forced disconnection
    this.socket.on('team-disconnection', (teamName: string) => {
      if(this.teamName === teamName) {this.router.navigateByUrl('/disconnected');}
    })

    //Teams refreshment
    this.socket.on('send-teams', (data: any) => {
      this.teams = Object.keys(data).map(key => data[key]);
      this.teams = this.teams.sort((a, b) => b.name < a.name ? 1 : -1);
      this.teams = this.teams.sort((a, b) => b.score - a.score);
    })

    this.socket.on('send-menu-groups', (menuTeamGroup: any[]) => {
      this.menuDistribution = Object.keys(menuTeamGroup).map((key: any) => menuTeamGroup[key]);
    })

    this.socket.emit('refresh-questions')
    this.socket.on('send-questions', (data: any[]) => {
      this.questions = data
    })

    this.socket.emit('refresh-question-ID')
    this.socket.on('update-question-ID', (data: number) => {
      this.answer = ''
      this.questionID = data
    })

    this.socket.emit('refresh-answers')
    this.socket.on('get-answers', (data: any[]) => {
      this.answers = []
      this.answers = data
    })
  }

  onAnswer(sentAnswer: any): void {
    //if(sentAnswer) {
      this.fullAnswer = {
        teamName: this.teamName,
        questionID: this.questionID,
        answer: sentAnswer,
        timestamp: Date.now(),
        correct: -1,
        bonus: 0
      }
      
      this.socket.emit('send-answer', this.fullAnswer)
    //}
  }

  onShowScoring(): void {
    if(this.showScores) {
      this.showScores = false
    } else {
      this.showScores = true
    }
  }

  getReponse(): boolean {
    this.control = false
    this.answers.forEach(element => {
      if(element.questionID === this.questionID && element.teamName === this.teamName && element.answer !== '') {
        this.control = true
      }
    })
    return this.control
  }

  getAnswer(): string {
    let returnedAnswer: string = "Vous n'avez rien répondu encore...";
    this.answers.forEach(element => {
      if(element.questionID === this.questionID && element.teamName === this.teamName && element.answer !== '') {
        returnedAnswer = "Vous avez répondu " + element.answer
        if(element.correct === 1) {
          returnedAnswer = returnedAnswer + ' - Correct'
        } else if(element.correct === 0) {
          returnedAnswer = returnedAnswer + ' - Incorrect'
        }
      }
        
      if(element.questionID === this.questionID && element.teamName === this.teamName && element.bonus !== 0) {
        returnedAnswer = returnedAnswer + ' - Bonus: ' + element.bonus
      }
    })
    return returnedAnswer
  }

  getScore(teamName: string): number {
    let score: number = 0
    this.teams.forEach(team => {
      if(team.name === teamName) {
        score = team.score
      }
    })
    return score
  }

  getQuestion(id: number): Question {
    if(id < 0) {
      id = 0
    }
    return this.questions[id]
  }

  isMenu(): boolean {
    let round: number = this.getQuestion(this.questionID - 1).round;
    let group: any = this.getQuestion(this.questionID - 1).group;
    let teamGroup = -1;
    this.menuDistribution.forEach(menu => {
      if(menu.menuNb === group && menu.round === round) {teamGroup = menu.teamGroup}
    })

    if(round === 1) {
      return (this.group1 === teamGroup) ? true : false;
    } else if(round === 2) {
      return (this.group2 === teamGroup) ? true : false;
    } else {
      return false
    }
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
