import { Injectable } from '@angular/core';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private teams!: Team[];

  constructor() {
    //TODO: Retrieve teams from MongoDB
   }


}
