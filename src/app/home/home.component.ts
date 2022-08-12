import { Component, OnInit } from '@angular/core';
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
    console.log(this.state)
  }

  onJoin(): void {
    if(this.teamName) {
      this.router.navigateByUrl('game/' + this.teamName);
    }
  }
}
