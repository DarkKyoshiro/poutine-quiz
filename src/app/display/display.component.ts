import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  questionID: number = 0;
  questions: Question[] = [];

  constructor(private socket: Socket) { }

  ngOnInit(): void {
    //------------------------------------------------------------------------------------
    //---------------------- Questions management ----------------------------------------
    //------------------------------------------------------------------------------------
    this.socket.emit('refresh-questions')
    this.socket.on('send-questions', (data: any[]) => {
      this.questions = data
    })

    this.socket.emit('refresh-question-ID')
    this.socket.on('update-question-ID', (data: number) => {this.questionID = data})
  }

}
