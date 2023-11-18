import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const backendURL = 'http://localhost:8080/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<any> {
    return this.http.post(
      backendURL + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  public register(firstName:string,lastName:string,school:string,major:string, email: string, username: string, password: string): Observable<any> {
    return this.http.post(
      backendURL + 'signup',
      {
        firstName,
        lastName,
        school,
        major,
        email,
        username,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(backendURL + 'signout', { }, httpOptions);
  }
}
