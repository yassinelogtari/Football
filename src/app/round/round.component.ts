import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FootballService } from '../services/football.service';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})
export class RoundComponent implements OnInit {
  matches: any[] = [];
  matchday: number=1;

  constructor(private route: ActivatedRoute, private footballService: FootballService,private location: Location) {}

  ngOnInit() {
    const code = this.route.snapshot.paramMap.get('code')!;
    this.matchday = +this.route.snapshot.paramMap.get('matchday')!; 
    this.footballService.getMatchDay(code, this.matchday).subscribe((data) => {
      this.matches = data.matches;
      console.log(this.matches)
    });
  }

  goBack(): void {
    this.location.back();
  }
  
}
