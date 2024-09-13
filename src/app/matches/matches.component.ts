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
  selectedRound: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private footballService: FootballService
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code')!;
    this.footballService.getMatches(code).subscribe((data: any) => {
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

  getRefereeNames(match: any): string[] {
    return match.referees ? match.referees.map((ref: any) => ref.name) : [];
  }
}
