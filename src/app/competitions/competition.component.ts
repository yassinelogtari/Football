import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/football.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css'],
})
export class CompetitionComponent implements OnInit {
  competitions: any[] = [];

  constructor(private footballService: FootballService) {}

  ngOnInit(): void {
    this.footballService.getCompetitions().subscribe((data) => {
      this.competitions = data.competitions;
      console.log(data); // Modify according to the data structure
    });
  }
}
