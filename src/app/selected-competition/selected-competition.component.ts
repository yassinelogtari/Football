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
  standings: any;
  displayTeams: boolean = false;
  displayMatches: boolean = false;
  displayScorers: boolean = false;
  years: any[] = [];
  selectedYear: number=2024;

  constructor(
    private route: ActivatedRoute,
    private footballService: FootballService
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code')!;
    this.generateYearOptions();
    this.selectedYear = new Date().getFullYear();

    this.footballService.getCompetitionById(code).subscribe((data) => {
      this.competition = data;
    });

    this.loadStandings(code, this.selectedYear); 

  }


  generateYearOptions() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 2000; year--) {
      this.years.push({ label: year.toString(), value: year });
    }
  }

  loadStandings(code: string, season: number) {
    this.footballService.getStandings(code, season).subscribe((data) => {
      this.standings = data.standings;
    });
  }

  onYearChange(event: any) {
    this.selectedYear = event.value;
    const code = this.route.snapshot.paramMap.get('code')!;
    this.loadStandings(code, this.selectedYear);
  }

  showTeamsDialog() {
    this.displayTeams = true;
  }

  showScorersDialog() {
    this.displayScorers = true;
  }

  showMatchDialog() {
    this.displayMatches = true;
  }
}

