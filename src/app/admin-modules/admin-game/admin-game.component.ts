import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Socket } from 'ngx-socket-io';
import { CourseDialogComponent } from 'src/app/course-dialog/course-dialog.component';
import { Answer } from 'src/app/models/answer.model';
import { MenuDistribution } from 'src/app/models/menuDistribution.model';
import { Question } from 'src/app/models/question.model';
import { Team } from 'src/app/models/team.model';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-admin-game',
  templateUrl: './admin-game.component.html',
  styleUrls: ['./admin-game.component.scss']
})
export class AdminGameComponent implements OnInit {
  questionID: number = 0;
  questions: Question[] = [];
  teams: Team[] = [];
  answers: Answer[] = [];
  menuDistribution: MenuDistribution[] = [];

  constructor(private socket: Socket, 
    private questionsService: QuestionsService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    //------------------------------------------------------------------------------------
    //---------------------- Teams management --------------------------------------------
    //------------------------------------------------------------------------------------
    //Request teams refreshment
    this.socket.emit('refresh-teams')

    //Teams refreshment
    this.socket.on('send-teams', (data: any) => {
      this.teams = Object.keys(data).map(key => data[key]);
      this.teams = this.teams.sort((a, b) => b.name < a.name ? 1 : -1);
      // this.teams = this.teams.sort((a, b) => b.score - a.score);
    });


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

  onStartQuiz(): void {
    this.socket.emit('start-quiz', this.questionsService.questions)
  }

  onPrevious(id: number): void {
    if(id >= 0) {
      this.socket.emit('go-to-question', id);
    }
  }

  onNext(id: number): void {
    if(id > 1 && !this.isCorrected()) {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data = {
        text: 'Vous êtes sur le point de passer à la question suivante, assurez-vous d\'avoir tout corriger.'
      }

      const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig)

      dialogRef.afterClosed().subscribe(
        data => {
          if(data) {
            if(id <= this.questions.length + 1) {
              this.socket.emit('go-to-question', id);
            }
          }
        }
      )
    }
    else {
      this.socket.emit('go-to-question', id);
    }
  }

  onCorrection(): void {
    if(this.questions[this.questionID-1].locked) {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data = {
        text: 'Vous êtes sur le point de déverrouiller la question, ce qui effacera les corrections de chacun.'
      }

      const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig)

      dialogRef.afterClosed().subscribe(
        data => {
          if(data) {
            this.socket.emit('question-correction')
          }
        }
      )
    }
    else {
      this.socket.emit('question-correction')
    }
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

  getTeamScore(teamName: string): number {
    let score: number = 0;

    this.teams.forEach(team => {
      if(team.name === teamName) {
        score = team.score
      }
    })
    
    return score;
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

  isCorrected(): boolean {
    let correctedAnswers: number = 0

    this.answers.forEach(answer => {
      if(answer.correct >= 0 && answer.questionID === this.questionID) {correctedAnswers++}
    })

    return correctedAnswers === this.teams.length
  }

  //Slide steps management
  onShowQuestion(): void {
    this.socket.emit('show-question')
  }

  onPreviousStep(step: number): void {
    this.socket.emit('go-to-step', step);
  }

  onNextStep(step: number): void {
    this.socket.emit('go-to-step', step);
  }

  onShowAnswer(): void {
    this.socket.emit('show-answer');
  }
}
