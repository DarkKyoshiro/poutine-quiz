import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppComponent } from "./app.component"
import { HomeComponent } from "./home/home.component"
import { AdminComponent } from "./admin/admin.component"
import { GameComponent } from "./game/game.component"
import { DisplayComponent } from "./display/display.component"
import { AppRoutingModule } from "./app-routing.module"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io"
import { QuestionFormComponent } from "./question-form/question-form.component"
import { environment } from "src/environments/environment"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { MatCardModule } from "@angular/material/card"
import { MatDividerModule } from "@angular/material/divider"
import { MatTabsModule } from "@angular/material/tabs"
import { MatExpansionModule } from "@angular/material/expansion"
import { MatSnackBarModule } from "@angular/material/snack-bar"
import { MatTableModule } from "@angular/material/table"
import { MatBadgeModule } from "@angular/material/badge"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonToggleModule } from "@angular/material/button-toggle"
import { MatProgressBarModule } from "@angular/material/progress-bar"
import { MatSlideToggleModule } from "@angular/material/slide-toggle"
import { MatSliderModule } from "@angular/material/slider"
import { MatBottomSheetModule } from "@angular/material/bottom-sheet"
import { MatInputModule } from "@angular/material/input"
import { MatDialogModule } from "@angular/material/dialog"

import { TeamScoreDetailComponent } from "./team-score-detail/team-score-detail.component"
import { AdminTeamsComponent } from "./admin/admin-modules/admin-teams/admin-teams.component"
import { AdminQuestionsComponent } from "./admin/admin-modules/admin-questions/admin-questions.component"
import { AdminGameComponent } from "./admin/admin-modules/admin-game/admin-game.component"
import { AdminSettingsComponent } from "./admin/admin-modules/admin-settings/admin-settings.component"
import { AdminStatsComponent } from "./admin/admin-modules/admin-stats/admin-stats.component"
import { CourseDialogComponent } from "./course-dialog/course-dialog.component"

//For HerokuApp
//const config: SocketIoConfig = { url: 'https://poutinequiz.herokuapp.com/', options: {} };

//For Local Server
// const config: SocketIoConfig = { url: 'http://localhost:8080/', options: {} };

const config: SocketIoConfig = { url: environment.apiUrl, options: {} }

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        GameComponent,
        QuestionFormComponent,
        DisplayComponent,
        TeamScoreDetailComponent,
        AdminTeamsComponent,
        AdminQuestionsComponent,
        AdminGameComponent,
        AdminSettingsComponent,
        AdminStatsComponent,
        CourseDialogComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SocketIoModule.forRoot(config),
        BrowserAnimationsModule,
        MatCardModule,
        MatDividerModule,
        MatTabsModule,
        MatExpansionModule,
        MatSnackBarModule,
        MatTableModule,
        MatBadgeModule,
        MatButtonModule,
        MatIconModule,
        MatButtonToggleModule,
        MatProgressBarModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatBottomSheetModule,
        MatInputModule,
        MatDialogModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [CourseDialogComponent],
})
export class AppModule {}
