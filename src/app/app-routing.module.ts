import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectedCompetitionComponent } from './selected-competition/selected-competition.component';
import { CompetitionComponent } from './competitions/competition.component';


const routes: Routes = [
  { path: 'competitions', component: CompetitionComponent },
  { path: 'standings/:code', component: SelectedCompetitionComponent },
  { path: '', redirectTo: '/competitions', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
