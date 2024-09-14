import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballService } from '../services/football.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: any[] = [];
  seasons: any[] = [];
  selectedSeason: number = new Date().getFullYear();

  constructor(private route: ActivatedRoute, private footballService: FootballService) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code')!;
    this.generateSeasonOptions();
    this.loadTeams(code, this.selectedSeason);
  }

  generateSeasonOptions() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 2000; year--) {
      this.seasons.push({ label: year.toString(), value: year });
    }
  }

  loadTeams(code: string, season: number) {
    this.footballService.getTeams(code, season).subscribe(data => {
      this.teams = data.teams;
    });
  }

  onSeasonChange(event: any) {
    this.selectedSeason = event.value;
    const code = this.route.snapshot.paramMap.get('code')!;
    this.loadTeams(code, this.selectedSeason);
  }
  redirectToWebsite(url: string) {
  window.open(url, '_blank');
}

}
