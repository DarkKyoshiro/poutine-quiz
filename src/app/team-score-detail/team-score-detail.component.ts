import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Socket } from 'ngx-socket-io';
import { Score } from '../models/score.model';

@Component({
  selector: 'app-team-score-detail',
  templateUrl: './team-score-detail.component.html',
  styleUrls: ['./team-score-detail.component.scss']
})
export class TeamScoreDetailComponent implements OnInit {
  scores: Score[] = []
  columnsToDisplay: string[] = ['questionID', 'points', 'bonusManual', 'bonusAuto'];

  constructor(private socket: Socket,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: {teamName: string, score: number}
  ) { }

  ngOnInit(): void {
    //Request score details
    this.socket.emit('get-team-scores', this.data.teamName)

    //Receive score details
    this.socket.on('send-team-scores', (teamScores: Score[]) => {
      this.scores = teamScores
    })
  }
}
