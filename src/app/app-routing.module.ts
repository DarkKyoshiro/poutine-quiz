import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DisplayComponent } from './display/display.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { QuestionFormComponent } from './question-form/question-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rejected', component: HomeComponent },
  { path: 'disconnected', component: HomeComponent },
  { path: 'qform', component: QuestionFormComponent}, 
  { path: 'admin', component: AdminComponent}, 
  { path: 'display', component: DisplayComponent}, 
  { path: 'game/:team', component: GameComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}