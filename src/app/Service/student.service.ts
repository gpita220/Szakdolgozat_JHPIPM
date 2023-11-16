import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private backendUrl='http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getStudents():Observable<any[]>{
    return this.http.get<any[]>(`${this.backendUrl}/students/all`);
  }

  public getStudentById(id:number):Observable<any>{
    return this.http.get<any>(`${this.backendUrl}/students/find${id}`)
  }

  public addStudent(student:any):Observable<any>{
    return this.http.post<any>(`${this.backendUrl}/students/add`,student);
  }

  public updateStudent(student:any):Observable<any>{
    return this.http.put<any>(`${this.backendUrl}/students/update`,student);
  }
  public deleteStudent(id:number):Observable<void>{
    return this.http.delete<void>(`${this.backendUrl}/students/delete?id=`+id);
  } 
}
