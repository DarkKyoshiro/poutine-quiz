import { Component, OnInit } from "@angular/core"
import { MatSnackBar } from "@angular/material/snack-bar"
import { Socket } from "ngx-socket-io"
import { Question } from "src/app/models/question.model"

@Component({
    selector: "app-admin-questions",
    templateUrl: "./admin-questions.component.html",
    styleUrls: ["./admin-questions.component.scss"],
})
export class AdminQuestionsComponent implements OnInit {
    questionType: string = "Nugget"
    questions: Question[] = []
    durationInSeconds: number = 2
    resetCheck: boolean = false
    questionID: number = 0
    timerDuration: number = 30

    constructor(private socket: Socket, private _snackBar: MatSnackBar) {}

    ngOnInit(): void {
        //------------------------------------------------------------------------------------
        //---------------------- Questions management ----------------------------------------
        //------------------------------------------------------------------------------------
        this.socket.emit("refresh-questions")
        this.socket.on("send-questions", (data: any[]) => {
            this.questions = data
        })
    }

    onActivate(id: number): void {
        this.socket.emit("go-to-question", this.questions[id - 1].id)
        this.socket.emit("resetTimer", this.timerDuration)
        this._snackBar.open(
            this.questions[id - 1].type + " #" + this.questions[id - 1].id + " loaded",
            "OK",
            {
                duration: this.durationInSeconds * 1000,
            }
        )
        this.questionID = 0
    }

    onClose(): void {
        this.questionID = 0
    }

    onQuestion(id: number): void {
        this.questionID === id ? (this.questionID = 0) : (this.questionID = id)
    }

    onResetQuiz(): void {
        this.resetCheck = true
    }

    onYesResetQuiz(): void {
        this.socket.emit("reset-quiz")
        this.resetCheck = false
    }

    onNoResetQuiz(): void {
        this.resetCheck = false
    }
}
