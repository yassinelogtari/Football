import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionComponent } from './competitions/competition.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SelectedCompetitionComponent } from './selected-competition/selected-competition.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    SelectedCompetitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
