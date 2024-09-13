import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FootballService } from '../services/football.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css'],
})
export class CompetitionComponent implements OnInit {
  competitions: any[] = [];

  constructor(private footballService: FootballService,private router: Router) {}

  ngOnInit(): void {
    this.footballService.getCompetitions().subscribe((data) => {
      this.competitions = data.competitions;
      console.log(data);
    });
  }
  onSelectCompetition(competitionCode: string) {
    this.router.navigate([`/standings/${competitionCode}`]);
  }
  
}
