import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private http: HttpClient) { }

  getAlerts() {
    return this.http.get('http://localhost:3000/alerts');
  }
}
