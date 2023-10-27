import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { Student } from '../class/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private backendUrl='http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getStudents():Observable<Student[]>{
    return this.http.get<Student[]>(`${this.backendUrl}/students/all`);
  }

  public getStudentById(id:number):Observable<Student>{
    return this.http.get<Student>(`${this.backendUrl}/students/find${id}`)
  }

  public addStudent(student:Student):Observable<Student>{
    return this.http.post<Student>(`${this.backendUrl}/students/add`,student);
  }

  public updateStudent(student:Student):Observable<Student>{
    return this.http.put<Student>(`${this.backendUrl}/students/update`,student);
  }
  public deleteStudent(id:number):Observable<void>{
    return this.http.delete<void>(`${this.backendUrl}/students/delete?id=`+id);
  } 
}
