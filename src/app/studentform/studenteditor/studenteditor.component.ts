import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/Service/student.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-studenteditor',
  templateUrl: './studenteditor.component.html',
  styleUrls: ['./studenteditor.component.css']
})
export class StudenteditorComponent implements OnInit{

  public srow!:any;
  public students!:any;
  public header: string[] = ['name', 'email', 'school','major'];
  studentform={
    id:0,
    name:'',
    email:'',
    school:'',
    major:''
  }
  constructor(private studentService:StudentService, private router:Router){

  }

  ngOnInit(): void {
      this.onGetStudents();
  }

  public onGetStudents(){
    this.studentService.getStudents().subscribe(
      (response:any[])=> {
        this.students=response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
    
  }

  public onDeleteStudentById(id:number, form:NgForm){
    this.studentService.deleteStudent(id).subscribe(
      (response:void)=> {
        alert("siker");
        this.onGetStudents();
        form.reset();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
  }
 
  public onUpdateStudent(student: any, form:NgForm){
    this.studentService.updateStudent(student).subscribe(
      (response: any) =>{
        alert("siker");
        this.onGetStudents();
        form.reset();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);

      }
    );
  }

  public selectedRow(datasource:any) {
      this.studentform.id=datasource.id;
      this.studentform.name=datasource.name;
      this.studentform.email=datasource.email;
      this.studentform.school=datasource.school;
      this.studentform.major=datasource.major;
      console.log(datasource, this.studentform);
  }

}
