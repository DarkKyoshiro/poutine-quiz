import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Team } from '../models/team.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  teamName!: string;
  state!: string;
  teams: Team[] = [];

  constructor(
    private socket: Socket,
    private router: Router) { }

  ngOnInit(): void {
    this.state = this.router.url

    //Request teams refreshment
    this.socket.emit('refresh-teams')

    //Teams refreshment
    this.socket.on('send-teams', (data: any) => {
      this.teams = Object.keys(data).map(key => data[key]);
    });
  }

  onJoin(form: NgForm): void {
    if(form.value.teamName) {
      this.router.navigateByUrl('game/' + form.value.teamName);
    }
  }

  onFillTeam(teamName: string): void {
    this.router.navigateByUrl('game/' + teamName);
  }
}
