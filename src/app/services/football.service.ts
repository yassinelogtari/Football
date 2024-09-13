import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FootballService {
  private apiUrl = '/api/v4/competitions';
  private apiKey = '512f6aed343748ed92105e04e7653696'; 

  constructor(private http: HttpClient) {}

  getCompetitions(): Observable<any> {
    return this.http.get<any>(this.apiUrl, {
      headers: {
        'X-Auth-Token': this.apiKey,
      },
    });
  }

  getCompetitionById(code: string) {
    return this.http.get<any>(`${this.apiUrl}/${code}`,{
      headers: {
        'X-Auth-Token': this.apiKey,
      },
    });
  }
  
  getTeams(code: string,season: number) {
    return this.http.get<any>(`${this.apiUrl}/${code}/teams?season=${season}`,{
      headers: {
        'X-Auth-Token': this.apiKey,
      },
    });
  }

  getScorerLeague(code: string,season: number) {
    return this.http.get<any>(`${this.apiUrl}/${code}/scorers?season=${season}`,{
      headers: {
        'X-Auth-Token': this.apiKey,
      },
    });
  }

  getMatches(code:string,season: number){
    return this.http.get<any>(`${this.apiUrl}/${code}/matches?season=${season}`,{
      headers: {
        'X-Auth-Token': this.apiKey,
      },
    });
  }

  getStandings(code:string,season: number){
    return this.http.get<any>(`${this.apiUrl}/${code}/standings?season=${season}`,{
      headers: {
        'X-Auth-Token': this.apiKey,
      },
    });
  }
  
}
