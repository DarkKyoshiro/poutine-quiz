import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Answer } from 'src/app/models/answer.model';
import { Question } from 'src/app/models/question.model';
import { Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-admin-stats',
  templateUrl: './admin-stats.component.html',
  styleUrls: ['./admin-stats.component.scss']
})
export class AdminStatsComponent implements OnInit {
  answers: Answer[] = []
  questions: Question[] = [];
  detailedScores = new Map;
  showDetails: boolean = true;
  teams: Team[] = [];

  constructor(private socket: Socket) { }

  ngOnInit(): void {
    //------------------------------------------------------------------------------------
    //---------------------- Questions management ----------------------------------------
    //------------------------------------------------------------------------------------
    this.socket.emit('refresh-questions')
    this.socket.on('send-questions', (data: any[]) => {
      this.questions = data
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
      this.detailedScores = this.createScoringTable()
    })

    //Teams refreshment
    this.socket.on('send-teams', (data: any) => {
      this.teams = Object.keys(data).map(key => data[key]);
      this.teams = this.teams.sort((a, b) => b.name < a.name ? 1 : -1);
      this.teams = this.teams.sort((a, b) => b.score - a.score);
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
        teamsAverage.set(answer.teamName, 999999999) 
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

  fastestTeamWrongAverage(): string {
    let teamsAverage = new Map<string, number>()
    let teamsNumber = new Map<string, number>()
    let bestTeam: string = "";
    let bestScore: number = 999999999999;

    this.answers.forEach(answer => {
      if(!teamsAverage.has(answer.teamName) && !teamsNumber.has(answer.teamName)) { 
        teamsAverage.set(answer.teamName, 999999999) 
        teamsNumber.set(answer.teamName, 0) 
      }
      if(answer.correct === 0) {
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
      if(answer.correct !== -1 && answer.timestamp !== 1989811953988) {
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

  fastestTeamWrongAdded(): string {
    let teamsAdded = new Map<string, number>()
    let bestTeam: string = "";
    let bestScore: number = 999999999999;

    this.answers.forEach(answer => {
      if(!teamsAdded.has(answer.teamName)) { teamsAdded.set(answer.teamName, 0) }
      if(answer.correct === 0) { teamsAdded.set(answer.teamName, teamsAdded.get(answer.teamName)! + (answer.timestamp - this.getFastestTime(answer.questionID))) }
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
      if(answer.correct !== -1 && answer.timestamp !== 1989811953988) { teamsAdded.set(answer.teamName, teamsAdded.get(answer.teamName)! + (answer.timestamp - this.getFastestTime(answer.questionID))) }
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

  remontada(): string {
    let teamsRd1 = new Map<string, number>()
    let teamsRd2 = new Map<string, number>()

    let bestTeam: string = "";
    let bestScore: number = -999;
    let bestTotal: number = -999;

    this.answers.forEach(answer => {
      if(!teamsRd1.has(answer.teamName)) { teamsRd1.set(answer.teamName, 0) }
      if(!teamsRd2.has(answer.teamName)) { teamsRd2.set(answer.teamName, 0) }
      if(this.questions[answer.questionID - 1].round === 1) {
        teamsRd1.set(answer.teamName, teamsRd1.get(answer.teamName) + answer.points + answer.bonus + answer.bonusWrongAnswers)
        teamsRd2.set(answer.teamName, teamsRd2.get(answer.teamName) + answer.points + answer.bonus + answer.bonusWrongAnswers)
      } else {
        teamsRd2.set(answer.teamName, teamsRd2.get(answer.teamName) + answer.points + answer.bonus + answer.bonusWrongAnswers)
      }
    })

    let teamsRd1Sorted = new Map([...teamsRd1].sort((a,b) => { return b[1]-a[1] }))
    let teamsRd2Sorted = new Map([...teamsRd2].sort((a,b) => { return b[1]-a[1] }))

    let teamsRd1Ranked = new Map<string, number>()
    let teamsRd2Ranked = new Map<string, number>()

    let i: number = 1
    for (let [key, value] of teamsRd1Sorted) {
      teamsRd1Ranked.set(key, i)
      i++
    }

    i = 1
    for (let [key, value] of teamsRd2Sorted) {
      teamsRd2Ranked.set(key, i)
      i++
    }

    if(teamsRd1Ranked.size > 0 && teamsRd2Ranked.size > 0) {
      for (let [key, value] of teamsRd1Ranked) {
        if(value - teamsRd2Ranked.get(key) > bestScore) { 
          bestTeam = key
          bestScore = value - teamsRd2Ranked.get(key)
          bestTotal = teamsRd2Ranked.get(key)
        } else if(teamsRd2Ranked.get(key) - value === bestScore && teamsRd2Ranked.get(key) > bestTotal) { 
          bestTeam = key
          bestScore = value - teamsRd2Ranked.get(key)
          bestTotal = teamsRd2Ranked.get(key)
        }
      }

      return bestTeam + " (Rd1: " + teamsRd1Ranked.get(bestTeam) + ", Rd2: " + teamsRd2Ranked.get(bestTeam) + ", Diff: " + bestScore + ")";
    }
    else  {
      return 'No one'
    }
  }

  degringolada(): string {
    let teamsRd1 = new Map<string, number>()
    let teamsRd2 = new Map<string, number>()

    let bestTeam: string = "";
    let bestScore: number = -999;
    let bestTotal: number = -999;

    this.answers.forEach(answer => {
      if(!teamsRd1.has(answer.teamName)) { teamsRd1.set(answer.teamName, 0) }
      if(!teamsRd2.has(answer.teamName)) { teamsRd2.set(answer.teamName, 0) }
      if(this.questions[answer.questionID - 1].round === 1) {
        teamsRd1.set(answer.teamName, teamsRd1.get(answer.teamName) + answer.points + answer.bonus + answer.bonusWrongAnswers)
        teamsRd2.set(answer.teamName, teamsRd2.get(answer.teamName) + answer.points + answer.bonus + answer.bonusWrongAnswers)
      } else {
        teamsRd2.set(answer.teamName, teamsRd2.get(answer.teamName) + answer.points + answer.bonus + answer.bonusWrongAnswers)
      }
    })

    let teamsRd1Sorted = new Map([...teamsRd1].sort((a,b) => { return b[1]-a[1] }))
    let teamsRd2Sorted = new Map([...teamsRd2].sort((a,b) => { return b[1]-a[1] }))

    let teamsRd1Ranked = new Map<string, number>()
    let teamsRd2Ranked = new Map<string, number>()

    let i: number = 1
    for (let [key, value] of teamsRd1Sorted) {
      teamsRd1Ranked.set(key, i)
      i++
    }

    i = 1
    for (let [key, value] of teamsRd2Sorted) {
      teamsRd2Ranked.set(key, i)
      i++
    }

    if(teamsRd1Ranked.size > 0 && teamsRd2Ranked.size > 0) {
      for (let [key, value] of teamsRd1Ranked) {
        if(teamsRd2Ranked.get(key) - value > bestScore) { 
          bestTeam = key
          bestScore = teamsRd2Ranked.get(key) - value
          bestTotal = teamsRd2Ranked.get(key)
        } else if(teamsRd2Ranked.get(key) - value === bestScore && teamsRd2Ranked.get(key) > bestTotal) { 
          bestTeam = key
          bestScore = teamsRd2Ranked.get(key) - value
          bestTotal = teamsRd2Ranked.get(key)
        }
      }

      return bestTeam + " (Rd1: " + teamsRd1Ranked.get(bestTeam) + ", Rd2: " + teamsRd2Ranked.get(bestTeam) + ", Diff: " + bestScore + ")";
    }
    else  {
      return 'No one'
    }
  }

  getRanks(teamName: string): number {
    let teamsArray: number[] = []
    let sortedArray: number[] = []
    let rankings: number[] = []

    let i: number = 0
    let teamIndex: number = 0

    this.teams.forEach(team => {
      teamsArray.push(team.score)
      if(team.name === teamName) { teamIndex = i }
      i++
    })

    sortedArray = teamsArray.slice().sort((a,b) => { return b-a })
    rankings = teamsArray.map((v) => { return sortedArray.indexOf(v)+1 })

    return rankings[teamIndex]
  }
}
