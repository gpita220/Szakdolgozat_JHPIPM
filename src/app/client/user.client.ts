
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root',
})
export class WeatherClient {
    private backendUrl='http://localhost:8080';
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get<User[]>(`${this.backendUrl}/user/all`);
  }
}