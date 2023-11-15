import { NgFor, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-chapter1',
  templateUrl: './chapter1.component.html',
  styleUrls: ['./chapter1.component.css']
})
export class Chapter1Component {
  public question1:any;
  public question2:any;
  public question3:any;
  public question4:any;
  public question5:any;

  public isError=false;
  public isSuccess=false;

  public bottomButton1=false;
  public bottomButton2=false;
  public bottomButton3=false;
  public bottomButton4=false;
  public bottomButton5=false;
  

  qForm1:FormGroup;
  qForm2:FormGroup;
  qForm3:FormGroup;
  qForm4:FormGroup;
  qForm5:FormGroup;
  currentlyChecked=false;

  constructor(private fb:FormBuilder, private viewportScroller: ViewportScroller){
    this.qForm1=this.fb.group({
      q1:['value1', [Validators.required]]
    });
    this.qForm2=this.fb.group({
      q2:['value2', [Validators.required]]
    });
    this.qForm3=this.fb.group({
      q3:['value1', [Validators.required]]
    });
    this.qForm4=this.fb.group({
      q4:['value3', [Validators.required]]
    });
    this.qForm5=this.fb.group({
      q5:['value2', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.question1=false;
    this.question2=false;
    this.question3=false;
    this.question4=false;
    this.question5=false;
  }
  public onButtonClick1(){
    if(this.question1==false){
      this.question1=true;
    }else this.question1=false;
    this.question2=false;
    this.question3=false;
    this.question4=false;
    this.question5=false;
    this.isError=false;
    this.isSuccess=false;
    this.qForm1.reset();
  }
  public onButtonClick2(){
    if(this.question2==false){
      this.question2=true;
    }else this.question2=false;
    this.question1=false;
    this.question3=false;
    this.question4=false;
    this.question5=false;
    this.isError=false;
    this.isSuccess=false;
    this.qForm2.reset();
  }
  public onButtonClick3(){
    if(this.question3==false){
      this.question3=true;
    }else this.question3=false;
    this.question2=false;
    this.question1=false;
    this.question4=false;
    this.question5=false;
    this.isError=false;
    this.isSuccess=false;
    this.qForm3.reset();
  }
  public onButtonClick4(){
    if(this.question4==false){
      this.question4=true;
    }else this.question4=false;
    this.question2=false;
    this.question3=false;
    this.question1=false;
    this.question5=false;
    this.isError=false;
    this.isSuccess=false;
    this.qForm4.reset();
  }
  public onButtonClick5(){
    if(this.question5==false){
      this.question5=true;
    }else this.question5=false;
    this.question2=false;
    this.question3=false;
    this.question4=false;
    this.question1=false;
    this.isError=false;
    this.isSuccess=false;
    this.qForm5.reset();
  }

  public onSubmit1(v:string){
    this.isSuccess=false;
    this.isError=false;
    console.log(this.qForm1.value);
    if(this.qForm1.value.q1==v){
      this.isSuccess=true;
    }else this.isError=true;
    this.qForm1.reset();
  }
  public onSubmit2(v:string){
    this.isSuccess=false;
    this.isError=false;
    console.log(this.qForm2.value);
    if(this.qForm2.value.q2==v){
      this.isSuccess=true;
    }else this.isError=true;
    this.qForm2.reset();
  }
  public onSubmit3(v:string){
    this.isSuccess=false;
    this.isError=false;
    console.log(this.qForm3.value);
    if(this.qForm3.value.q3==v){
      this.isSuccess=true;
    }else this.isError=true;
    this.qForm3.reset();
  }
  public onSubmit4(v:string){
    this.isSuccess=false;
    this.isError=false;
    console.log(this.qForm4.value);
    if(this.qForm4.value.q4==v){
      this.isSuccess=true;
    }else this.isError=true;
    this.qForm4.reset();
  }
  public onSubmit5(v:string){
    this.isSuccess=false;
    this.isError=false;
    console.log(this.qForm5.value);
    if(this.qForm5.value.q5==v){
      this.isSuccess=true;
    }else this.isError=true;
    this.qForm5.reset();
  }

  public onMessageClick(elementid:string){
    if(elementid=="q1"){
      this.bottomButton1=true;
    }
    else if(elementid=="q2"){
      this.bottomButton2=true;
    }
    else if(elementid=="q3"){
      this.bottomButton3=true;
    }
    else if(elementid=="q4"){
      this.bottomButton4=true;
    }
    else if(elementid=="q5"){
      this.bottomButton5=true;
    }
    
    this.viewportScroller.scrollToAnchor(elementid);
    
  }
  
  public onBottomButton(elementid:string){
    this.bottomButton1=false;
    this.bottomButton2=false;
    this.bottomButton3=false;
    this.bottomButton4=false;
    this.bottomButton5=false;
    this.viewportScroller.scrollToAnchor(elementid);
  }
}
