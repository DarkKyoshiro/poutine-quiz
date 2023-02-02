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
  showDetails: boolean = true;

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
    let scoreTotal = new Map

    this.answers.forEach(answer => {
      if(!scoreTotal.has(answer.teamName)) {
        scoreTotal.set(answer.teamName, 0)
      }
      scoreTotal.set(answer.teamName, answer.points + answer.bonus + answer.bonusWrongAnswers + scoreTotal.get(answer.teamName))

      if(table.has(answer.questionID)) {
        table.get(answer.questionID).push({
          team: answer.teamName,
          isCorrected: answer.correct,
          points: answer.points,
          bonus: answer.bonus,
          bonusWrongAnswers: answer.bonusWrongAnswers,
          total: scoreTotal.get(answer.teamName)
        })
      } else {
        table.set(answer.questionID, [{
          team: answer.teamName,
          isCorrected: answer.correct,
          points: answer.points,
          bonus: answer.bonus,
          bonusWrongAnswers: answer.bonusWrongAnswers,
          total: scoreTotal.get(answer.teamName)
        }])
      }
    })

    return table
  }

  onChangeDetailsDisplay(): void {
    console.log(this.showDetails)
  }
}
