import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionComponent } from './competitions/competition.component';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SelectedCompetitionComponent } from './selected-competition/selected-competition.component';
import { TeamsComponent } from './teams/teams.component';
import { MatDialogModule } from '@angular/material/dialog';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatchesComponent } from './matches/matches.component';
import { ScorersComponent } from './scorers/scorers.component';
import { TreeTableModule } from 'primeng/treetable';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { RoundComponent } from './round/round.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    SelectedCompetitionComponent,
    TeamsComponent,
    MatchesComponent,
    ScorersComponent,
    RoundComponent,
  ],
  imports: [
    FormsModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    DialogModule,
    TreeTableModule,
    TableModule,
    DropdownModule,
  ],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
