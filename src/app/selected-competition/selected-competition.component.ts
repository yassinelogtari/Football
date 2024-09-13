import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballService } from '../services/football.service';

@Component({
  selector: 'app-selected-competition',
  templateUrl: './selected-competition.component.html',
  styleUrls: ['./selected-competition.component.css'],
})
export class SelectedCompetitionComponent implements OnInit {

  competition: any;
  displayTeams: boolean = false;
  displayMatches:boolean=false
  displayScorers:boolean=false

  constructor(
    private route: ActivatedRoute,
    private footballService: FootballService
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code')!;
    this.footballService.getCompetitionById(code).subscribe((data) => {
      this.competition = data; 
    });
  }

  showTeamsDialog() {
    this.displayTeams = true;
  }
  showScorersDialog() {
    this.displayScorers=true
    }
    showMatchDialog() {
      this.displayMatches=true
    }
}
