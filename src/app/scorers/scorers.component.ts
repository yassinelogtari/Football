import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballService } from '../services/football.service';

@Component({
  selector: 'app-scorers',
  templateUrl: './scorers.component.html',
  styleUrls: ['./scorers.component.css']
})
export class ScorersComponent implements OnInit {

  scorers: any[] = [];
  seasons: any[] = []; // Array to hold seasons
  selectedSeason: number = new Date().getFullYear(); // Default to current year

  constructor(private route: ActivatedRoute, private footballService: FootballService) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code')!;
    this.generateSeasonOptions(); // Populate seasons array
    this.loadScorers(code, this.selectedSeason); // Load scorers for the default season
  }

  // Generate an array of seasons, e.g., from 2000 to current year
  generateSeasonOptions() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 2000; year--) {
      this.seasons.push({ label: year.toString(), value: year });
    }
  }

  loadScorers(code: string, season: number) {
    this.footballService.getScorerLeague(code, season).subscribe(data => {
      this.scorers = data.scorers;
    });
  }

  onSeasonChange(event: any) {
    this.selectedSeason = event.value;
    const code = this.route.snapshot.paramMap.get('code')!;
    this.loadScorers(code, this.selectedSeason);
  }
}
