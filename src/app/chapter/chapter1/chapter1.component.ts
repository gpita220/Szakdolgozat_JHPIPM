import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-chapter1',
  templateUrl: './chapter1.component.html',
  styleUrls: ['./chapter1.component.css']
})
export class Chapter1Component {
  public question1:any;
  public isError=false;
  public isSuccess=false;
  public errmessage="";
  

  qForm:FormGroup;
  currentlyChecked=false;

  constructor(private fb:FormBuilder){
    this.qForm=this.fb.group({
      q1:['value1', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.question1=false;
  }
  public onButtonClik1(){
    if(this.question1==false){
      this.question1=true;
    }else this.question1=false;
    
  }
  public onSubmit(v:string){
    this.isSuccess=false;
    this.isError=false;
    console.log(this.qForm.value);
    if(this.qForm.value.q1==v){
      this.isSuccess=true;
    }else this.isError=true;
    this.qForm.reset();
  }
  
}
