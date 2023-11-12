import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationClient {
    private backendUrl='http://localhost:8080';
    constructor(private http: HttpClient) {}

    public login(username: string, password: string): Observable<string> {
    return this.http.post(
            `${this.backendUrl}/user/authenticate`,
        {
            username: username,
            password: password,
        },
    { responseType: 'text' }
    );
    }

  public register(
    firstname:string,
    lastname:string,
    username: string,
    email: string,
    password: string,
    school:string,
    major:string
  ): Observable<string> {
    return this.http.post(
        `${this.backendUrl}/user/register`,
      {
        firstname:firstname,
        lastname:lastname,
        username: username,
        email: email,
        password: password,
        school:school,
        mmajor:major,
      },
      { responseType: 'text' }
    );
  }
}