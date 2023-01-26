import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-admin-teams',
  templateUrl: './admin-teams.component.html',
  styleUrls: ['./admin-teams.component.scss']
})
export class AdminTeamsComponent implements OnInit {
  teams: Team[] = [];

  columnsToDisplay: string[] = ['logged', 'name', 'score', 'group1', 'group2', 'loggedManagement'];

  constructor(
    private socket: Socket,
    private router: Router
    ) { }

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
  }

  onChangeGroup(round: number, teamName: string, teamGroup: number): void {
    this.socket.emit('update-team-group', round, teamName, teamGroup);
  }

  onDisconnect(teamName: string): void {
    this.socket.emit('disconnect-team', teamName);
  }

  onEject(teamName: string): void {
    this.socket.emit('eject-team', teamName);
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

}
