import { Component } from '@angular/core';
import { StorageService } from '../Service/storage.service';
import { UserService } from '../Service/user.service';
import { User } from '../class/user';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profiles-admin',
  templateUrl: './profiles-admin.component.html',
  styleUrls: ['./profiles-admin.component.css']
})
export class ProfilesAdminComponent {
  public srow:any;
  public users!:any[];
  public header: string[] = ['id','firstName','lastName', 'school','major','email','username','passwordDecoded','role'];
  user={
    id:0,
    firstName:'',
    lastName:'',
    school:'',
    major:'',
    email:'',
    username:'',
    passwordDecoded:'',
    role:""
  };
 public roleUpdate={
    role:""
  };
  errormessage='';
  failedDiv=false;

  constructor(private storageService: StorageService, private userService:UserService) { }

  ngOnInit(): void {
   this.onGetAllUsers();
    
  }

  public onGetAllUsers():void{
    this.userService.getUsers().subscribe(
      {
        next: data => {
          this.users=data;
          console.log(data);
          
        },
        error: err => {
          this.errormessage=err.message;
          alert(err.message);
         
        }});
     console.log(this.users);
  }

  public selectedRow(datasource:any) {
    this.user.id=datasource.id;
    this.user.firstName=datasource.firstName;
    this.user.lastName=datasource.lastName;
    this.user.school=datasource.school;
    this.user.major=datasource.major;
    this.user.email=datasource.email;
    this.user.username=datasource.username;
    this.user.passwordDecoded=datasource.passwordDecoded;
    if(datasource.roles[0].name=="ROLE_ADMIN"){
      this.user.role="admin";
      this.roleUpdate.role="admin";
    }else {
      this.user.role="user";
      this.roleUpdate.role="user";
    }
    console.log(datasource, this.user);
  }


  public onUpdate(userForm:NgForm){
    

    this.userService.updateUser(
      this.user.id,
      this.user.firstName,
      this.user.lastName,
      this.user.school,
      this.user.major,
      this.user.email,
      this.user.username,
      this.user.passwordDecoded,
      this.roleUpdate.role).subscribe(
      {
        next: data => {
          userForm.reset();
          this.onGetAllUsers();
          console.log(data);
          console.log(this.roleUpdate);
          
        },
        error: err => {
          this.errormessage = err.error.message;
         
        }}
  );
}

  public onDelete(userForm:NgForm):void{
    this.userService.deleteUser(this.user.id).subscribe(
      {
      next:res => {
        userForm.reset();
        this.onGetAllUsers();
        console.log(res);
      },
      error:err => {
        this.errormessage=err.message;
      }
    }
    )
  }

}
