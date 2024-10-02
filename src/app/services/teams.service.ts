import { Injectable, OnInit } from "@angular/core"
import { Team } from "../models/team.model"
import { Socket } from "ngx-socket-io"

@Injectable({
    providedIn: "root",
})
export class TeamsService {
    private teams!: Team[]

    constructor() {
        //TODO: Retrieve teams from MongoDB
    }

    ngOnInit(): void {}
}
