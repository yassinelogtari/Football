import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballService } from '../services/football.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})

export class TeamsComponent implements OnInit {

  teams: any;
  constructor(private route: ActivatedRoute,private footballService: FootballService){}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code')!;
    this.footballService.getTeams(code).subscribe(data => {
      console.log(data);
      this.teams = data.teams;
    });
  }

}
