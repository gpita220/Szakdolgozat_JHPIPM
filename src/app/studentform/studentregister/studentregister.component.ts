import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/Service/student.service';
import { Student } from 'src/app/class/student';

@Component({
  selector: 'app-studentregister',
  templateUrl: './studentregister.component.html',
  styleUrls: ['./studentregister.component.css']
})
export class StudentregisterComponent {
  constructor(private studentService:StudentService, private router:Router){

  }

  public onAddStudent(studentAddForm: NgForm){
    this.studentService.addStudent(studentAddForm.value).subscribe(
      (response: Student) =>{
        alert("siker");
        this.router.navigate(['/','mainpage']);
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
        studentAddForm.reset();
      }
    );
  }

  
}
