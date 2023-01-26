import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  teamName!: string;
  state!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.state = this.router.url
  }

  onJoin(form: NgForm): void {
    if(form.value.teamName) {
      this.router.navigateByUrl('game/' + form.value.teamName);
    }
  }
}
