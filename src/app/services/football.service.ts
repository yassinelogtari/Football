import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FootballService {
  private apiUrl = '/api/v4/competitions';
  private apiKey = 'f24e4fc4da494f229287ae8b2d77075b'; 

  constructor(private http: HttpClient) {}

  getCompetitions(): Observable<any> {
    return this.http.get<any>(this.apiUrl, {
      headers: {
        'X-Auth-Token': this.apiKey,
      },
    });
  }
}
