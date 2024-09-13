import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballService } from '../services/football.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches: any[] = [];
  matchdays: any[] = [];
  seasons: any[] = []; // Array to hold seasons
  selectedRound: number | null = null;
  selectedSeason: number = new Date().getFullYear(); // Default to current year

  constructor(
    private route: ActivatedRoute,
    private footballService: FootballService
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code')!;
    this.generateSeasonOptions(); // Populate seasons array
    this.loadMatches(code, this.selectedSeason); // Load matches for the default season

    this.footballService.getMatches(code, this.selectedSeason).subscribe((data: any) => {
      this.matches = data.matches;
      this.matchdays = [...new Set(this.matches.map((match) => match.matchday))]
        .map(day => ({ label: `Round ${day}`, value: day }));
    });
  }

  // Generate an array of seasons, e.g., from 2000 to current year
  generateSeasonOptions() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 2000; year--) {
      this.seasons.push({ label: year.toString(), value: year });
    }
  }

  loadMatches(code: string, season: number) {
    this.footballService.getMatches(code, season).subscribe((data: any) => {
      this.matches = data.matches;
      this.matchdays = [...new Set(this.matches.map((match) => match.matchday))]
        .map(day => ({ label: `Round ${day}`, value: day }));
    });
  }

  filterMatchesByRound(): any[] {
    if (this.selectedRound) {
      return this.matches.filter(match => match.matchday === this.selectedRound);
    }
    return this.matches;
  }

  onSeasonChange(event: any) {
    this.selectedSeason = event.value;
    const code = this.route.snapshot.paramMap.get('code')!;
    this.loadMatches(code, this.selectedSeason); // Reload matches for the selected season
  }

  getRefereeNames(match: any): string[] {
    return match.referees ? match.referees.map((ref: any) => ref.name) : [];
  }
}
