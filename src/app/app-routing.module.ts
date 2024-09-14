import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectedCompetitionComponent } from './selected-competition/selected-competition.component';
import { CompetitionComponent } from './competitions/competition.component';
import { RoundComponent } from './round/round.component';


const routes: Routes = [
  { path: 'competitions', component: CompetitionComponent },
  { path: 'standings/:code', component: SelectedCompetitionComponent },
  { path: 'round/:code/:matchday', component: RoundComponent },
  { path: '', redirectTo: '/competitions', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
