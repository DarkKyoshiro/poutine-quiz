import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Question } from '../models/question.model';
import { Team } from '../models/team.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  teams: Team[] = [];
  questions: Question[] = [];

  constructor(
    private socket: Socket,
    private router: Router
    ) { }

  ngOnInit(): void {
    //------------------------------------------------------------------------------------
    //---------------------- Admin management --------------------------------------------
    //------------------------------------------------------------------------------------
    this.socket.emit('new-admin-connection');

    //If admin is already logged
    this.socket.on('user-rejected', () => {
      this.router.navigateByUrl('/rejected');
    })


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
    })


    //------------------------------------------------------------------------------------
    //---------------------- Questions management ----------------------------------------
    //------------------------------------------------------------------------------------
    this.socket.emit('refresh-questions')
    this.socket.on('send-questions', (data: any[]) => {
      this.questions = data
    })
  }
}
