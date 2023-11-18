import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
const backendURL = 'http://localhost:8080/user/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers():Observable<any[]>{
    return this.http.get<any[]>(backendURL+'all',httpOptions);
  }
 

  public updateUser(id:number,firstName:string,lastName:string,school:string,major:string, email: string, username: string, password: string,roles:{}):Observable<any>{
    return this.http.put(backendURL+'update',{
    id,
    firstName,
    lastName,
    school,
    major,
    email,
    username,
    password,
    roles
    },httpOptions);
  }
  public deleteUser(id:number):Observable<void>{
    return this.http.delete<void>(backendURL+'delete?id='+id,httpOptions);
  } 

}
