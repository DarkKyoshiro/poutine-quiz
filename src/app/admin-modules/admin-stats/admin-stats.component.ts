import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Answer } from 'src/app/models/answer.model';

@Component({
  selector: 'app-admin-stats',
  templateUrl: './admin-stats.component.html',
  styleUrls: ['./admin-stats.component.scss']
})
export class AdminStatsComponent implements OnInit {
  answers: Answer[] = []
  detailedScores = new Map;

  constructor(private socket: Socket) { }

  ngOnInit(): void {
    //------------------------------------------------------------------------------------
    //---------------------- Answers management ------------------------------------------
    //------------------------------------------------------------------------------------
    this.socket.emit('refresh-answers')
    this.socket.on('get-answers', (data: any) => {
      this.answers = [];
      this.answers = data;
      // this.answers = this.answers.sort((a, b) => a.timestamp - b.timestamp);
      //this.answers = this.answers.sort((a, b) => b.correct - a.correct);
      this.detailedScores = this.createScoringTable()
    })
  }

  createScoringTable(): any {
    let table = new Map

    this.answers.forEach(answer => {
      if(table.has(answer.questionID)) {
        table.get(answer.questionID).push({
          team: answer.teamName,
          isCorrected: answer.correct,
          points: answer.points,
          bonus: answer.bonus,
          bonusWrongAnswers: answer.bonusWrongAnswers
        })
      } else {
        table.set(answer.questionID, [{
          team: answer.teamName,
          isCorrected: answer.correct,
          points: answer.points,
          bonus: answer.bonus,
          bonusWrongAnswers: answer.bonusWrongAnswers
        }])
      }
    })

    return table
  }
}
