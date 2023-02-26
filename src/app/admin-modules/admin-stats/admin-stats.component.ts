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

  mostCorrectAnswers(): string {
    let teams = new Map<string, number>()
    let bestTeam: string = "";
    let bestScore: number = -1;

    this.answers.forEach(answer => {
      if(!teams.has(answer.teamName)) { teams.set(answer.teamName, 0) }
      if(answer.correct === 1) {teams.set(answer.teamName, teams.get(answer.teamName)! + 1)}
    })

    for (let [key, value] of teams) {
      if(value > bestScore) { 
        bestTeam = key
        bestScore = value 
      } else if(value === bestScore) { 
        bestTeam =  bestTeam + ", " + key 
      }
    }

    return bestTeam + " (" + bestScore + ")";
  }

  mostIncorrectAnswers(): string {
    let teams = new Map<string, number>()
    let bestTeam: string = "";
    let bestScore: number = -1;

    this.answers.forEach(answer => {
      if(!teams.has(answer.teamName)) { teams.set(answer.teamName, 0) }
      if(answer.correct === 0) {teams.set(answer.teamName, teams.get(answer.teamName)! + 1)}
    })

    for (let [key, value] of teams) {
      if(value > bestScore) { 
        bestTeam = key
        bestScore = value 
      } else if(value === bestScore) { 
        bestTeam =  bestTeam + ", " + key 
      }
    }

    return bestTeam + " (" + bestScore + ")";
  }

  //Get fastest answer time
  getFastestTime(questionID: number): number {
    let timestamp: number = 9999999999999;
    this.answers.forEach(answer => {
      if(answer.questionID === questionID && answer.timestamp < timestamp) {
        timestamp = answer.timestamp;
      }
    })

    return timestamp;
  }

  fastestTeamAverage(): string {
    let teamsAverage = new Map<string, number>()
    let teamsNumber = new Map<string, number>()
    let bestTeam: string = "";
    let bestScore: number = 999999999999;

    this.answers.forEach(answer => {
      if(!teamsAverage.has(answer.teamName) && !teamsNumber.has(answer.teamName)) { 
        teamsAverage.set(answer.teamName, 0) 
        teamsNumber.set(answer.teamName, 0) 
      }
      if(answer.correct !== -1) {
        teamsAverage.set(answer.teamName, (teamsAverage.get(answer.teamName)! * teamsNumber.get(answer.teamName)! + (answer.timestamp - this.getFastestTime(answer.questionID))) / (teamsNumber.get(answer.teamName)! + 1))
        teamsNumber.set(answer.teamName, teamsNumber.get(answer.teamName)! + 1)
      }
    })

    for (let [key, value] of teamsAverage) {
      if(value < bestScore) { 
        bestTeam = key
        bestScore = value 
      } else if(value === bestScore) { 
        bestTeam =  bestTeam + ", " + key 
      }
    }

    return bestTeam + " (" + Math.trunc(bestScore)/1000 + " sec)";
  }

  slowestTeamAverage(): string {
    let teamsAverage = new Map<string, number>()
    let teamsNumber = new Map<string, number>()
    let bestTeam: string = "";
    let bestScore: number = -1;

    this.answers.forEach(answer => {
      if(!teamsAverage.has(answer.teamName) && !teamsNumber.has(answer.teamName)) { 
        teamsAverage.set(answer.teamName, 0) 
        teamsNumber.set(answer.teamName, 0) 
      }
      if(answer.correct !== -1) {
        teamsAverage.set(answer.teamName, (teamsAverage.get(answer.teamName)! * teamsNumber.get(answer.teamName)! + (answer.timestamp - this.getFastestTime(answer.questionID))) / (teamsNumber.get(answer.teamName)! + 1))
        teamsNumber.set(answer.teamName, teamsNumber.get(answer.teamName)! + 1)
      }
    })

    for (let [key, value] of teamsAverage) {
      if(value > bestScore) { 
        bestTeam = key
        bestScore = value 
      } else if(value === bestScore) { 
        bestTeam =  bestTeam + ", " + key 
      }
    }

    return bestTeam + " (" + Math.trunc(bestScore)/1000 + " sec)";
  }

  fastestTeamAdded(): string {
    let teamsAdded = new Map<string, number>()
    let bestTeam: string = "";
    let bestScore: number = 999999999999;

    this.answers.forEach(answer => {
      if(!teamsAdded.has(answer.teamName)) { teamsAdded.set(answer.teamName, 0) }
      if(answer.correct !== -1) { teamsAdded.set(answer.teamName, teamsAdded.get(answer.teamName)! + (answer.timestamp - this.getFastestTime(answer.questionID))) }
    })

    for (let [key, value] of teamsAdded) {
      if(value < bestScore) { 
        bestTeam = key
        bestScore = value 
      } else if(value === bestScore) { 
        bestTeam =  bestTeam + ", " + key 
      }
    }

    return bestTeam + " (" + Math.trunc(bestScore)/1000 + " sec)";
  }

  slowestTeamAdded(): string {
    let teamsAdded = new Map<string, number>()
    let bestTeam: string = "";
    let bestScore: number = -1;

    this.answers.forEach(answer => {
      if(!teamsAdded.has(answer.teamName)) { teamsAdded.set(answer.teamName, 0) }
      if(answer.correct !== -1) { teamsAdded.set(answer.teamName, teamsAdded.get(answer.teamName)! + (answer.timestamp - this.getFastestTime(answer.questionID))) }
    })

    for (let [key, value] of teamsAdded) {
      if(value > bestScore) { 
        bestTeam = key
        bestScore = value 
      } else if(value === bestScore) { 
        bestTeam =  bestTeam + ", " + key 
      }
    }

    return bestTeam + " (" + Math.trunc(bestScore)/1000 + " sec)";
  }
}
