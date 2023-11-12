
import { RouterModule } from '@angular/router';
import { UserService } from './../Service/user.service';

import { Component } from '@angular/core';
import { StorageService } from '../Service/storage.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  currentUser: any;
  currentUserRole="";
  profilediv:boolean=true;
  profileform:boolean=false;
  newuser:any;
  errorMessage='';
  isUpdateSuccessful = false;
  isUpdateFailed = false; 
  decode:any;
  roles={
    role:""
  };

  constructor(private storageService: StorageService, private userService:UserService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    
    console.log(this.currentUser);
    const r=this.currentUser.roles[0];
    console.log(r);
    if(r=="ROLE_ADMIN"){
      this.currentUserRole="admin";
    }else this.currentUserRole="user";
  }

  public onProfileDivShow():void{
    this.profilediv=false;
    this.profileform=true;
  }
  
  public onUserUpdate(){
    const id=this.currentUser.user.id;
    const firstName=this.currentUser.user.firstName;
    const lastName=this.currentUser.user.lastName;
    const school=this.currentUser.user.school;
    const major=this.currentUser.user.major;
    const email=this.currentUser.user.email;
    const username=this.currentUser.user.username;
    const password=this.currentUser.user.passwordDecoded;
    if(this.currentUser.roles[0]=="ROLE_ADMIN"){
      this.roles.role="admin";
    } else this.roles.role="user";
    const role=this.currentUser.roles[0];
    this.userService.updateUser(id,firstName,lastName,school,major,email,username,password,this.roles).subscribe(
        {
          next: data => {
            console.log(data);
            
          },
          error: err => {
            this.errorMessage = err.error.message;
           
          }}
    );
  }

}
