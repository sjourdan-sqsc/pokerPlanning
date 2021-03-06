import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './components/app/app.component';
import { routing }       from './app.routing';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { RoomComponent }   from './components/room/room.component';
import { JoinRoomComponent }   from './components/room/joinRoom.component';
import { HistoryCard }   from './components/room/historyCard.component';
import { EvaluationDisplay }   from './components/room/evaluationDisplay.component';
import { ModalComponent }   from './components/global/modal.component';

import { RoomService }  from './services/room.service';
import { UserService }  from './services/user.service';
import { CardService }  from './services/card.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    ],
  declarations: [
    AppComponent,
    DashboardComponent,
    JoinRoomComponent,
    RoomComponent,
    EvaluationDisplay,
    //global
    ModalComponent,
    HistoryCard,
  ],
  providers: [
    RoomService,
    UserService,
    CardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
