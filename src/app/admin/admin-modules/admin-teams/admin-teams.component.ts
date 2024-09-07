import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Socket } from 'ngx-socket-io';
import { CourseDialogComponent } from 'src/app/course-dialog/course-dialog.component';
import { MenuDistribution } from 'src/app/models/menuDistribution.model';
import { Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-admin-teams',
  templateUrl: './admin-teams.component.html',
  styleUrls: ['./admin-teams.component.scss']
})
export class AdminTeamsComponent implements OnInit {
  teams: Team[] = [];
  menuDistribution: MenuDistribution[] = [];

  constructor(
    private socket: Socket,
    private dialog: MatDialog
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
    });

    //------------------------------------------------------------------------------------
    //---------------------- Questions management ----------------------------------------
    //------------------------------------------------------------------------------------
    this.socket.on('send-menu-groups', (menuTeamGroup: any[]) => {
      this.menuDistribution = Object.keys(menuTeamGroup).map((key: any) => menuTeamGroup[key]);
    })
  }

  onChangeGroup(round: number, teamName: string, teamGroup: number): void {
    this.socket.emit('update-team-group', round, teamName, teamGroup);
  }

  onDisconnect(teamName: string): void {
    this.socket.emit('disconnect-team', teamName);
  }

  onEject(teamName: string): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      text: 'Vous êtes sur le point de supprimer l\'utilisateur "' + teamName + '", ce qui supprimera aussi toutes ses data.'
    }

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(
      data => {
        if(data) {this.socket.emit('eject-team', teamName)}
      }
    )
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

  onChangeMenuGroup(menuNb: number, round: number, teamGroup: number): void {
    this.socket.emit('update-menu-team-group', menuNb, round, teamGroup);
  }

}
