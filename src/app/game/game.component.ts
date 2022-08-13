import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Answer } from '../models/answer.model';
import { Question } from '../models/question.model';
import { Team } from '../models/team.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  questions!: Question[];
  questionID: number = 0;
  teamName!: string;
  group!: number;
  teams: Team[] = [];
  answer!: string;
  fullAnswer!: Answer;
  answers: Answer[] = [];
  control: boolean = false;

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
    this.socket.on('send-group', (data: any) => {
      this.group = data
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
      this.control = false
      this.answers.forEach(element => {
        if(element.questionID === this.questionID && element.teamName === this.teamName) {
          element.answer = this.fullAnswer.answer
          element.timestamp = this.fullAnswer.timestamp
          this.control = true
        }
      })
      if(!this.control) {this.answers.push(this.fullAnswer)}
      
      this.socket.emit('send-answer', this.fullAnswer)
    //}
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
        
      if(element.bonus !== 0) {
        returnedAnswer = returnedAnswer + ' + ' + element.bonus + ' Bonus'
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

  getResult(teamName: string): string {
    let returnedAnswer: number = 0;
    let sign: string;
    this.answers.forEach(element => {
      if(element.questionID === this.questionID && element.teamName === teamName && element.correct === 1) {
        returnedAnswer = this.questions[this.questionID].points + element.bonus
      } else if(element.questionID === this.questionID && element.teamName === teamName && element.correct === 0 && this.questions[this.questionID].speed) {
        returnedAnswer = - this.questions[this.questionID].points + element.bonus
      } else if(element.questionID === this.questionID && element.teamName === teamName && element.correct === 0 && !this.questions[this.questionID].speed) {
        returnedAnswer = element.bonus
      } else if(element.questionID === this.questionID && element.teamName === teamName) {
        returnedAnswer = element.bonus
      }

      if(element.questionID === this.questionID && element.teamName !== teamName && element.correct === 0 && this.questions[this.questionID].speed) {
        returnedAnswer = returnedAnswer + 1
      }
    })
    returnedAnswer >= 0 ? sign = "+" : sign = ""
    return sign + returnedAnswer
  }

  getQuestion(id: number): Question {
    if(id < 0) {
      id = 0
    }
    return this.questions[id]
  }

}
