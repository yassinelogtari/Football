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

  constructor(private route: ActivatedRoute, private footballService: FootballService) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code')!;
    this.footballService.getScorerLeague(code).subscribe(data => {
      this.scorers = data.scorers;
    });
  }
}
