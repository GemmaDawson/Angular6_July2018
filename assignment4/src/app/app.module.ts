import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddResultsComponent } from './odd-results/odd-results.component';
import { EvenResultsComponent } from './even-results/even-results.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddResultsComponent,
    EvenResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
