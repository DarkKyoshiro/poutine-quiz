import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { GameComponent } from './game/game.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

//For HerokuApp
const config: SocketIoConfig = { url: 'https://poutinequiz.herokuapp.com/', options: {} };

//For Local Server
//const config: SocketIoConfig = { url: 'http://localhost:8080/', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
