import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Chapter1Component } from './chapter/chapter1/chapter1.component';
import { Chapter2Component } from './chapter/chapter2/chapter2.component';
import { Chapter3Component } from './chapter/chapter3/chapter3.component';
import { Chapter4Component } from './chapter/chapter4/chapter4.component';
import { Chapter5Component } from './chapter/chapter5/chapter5.component';
import { Chapter6Component } from './chapter/chapter6/chapter6.component';
import { Chapter7Component } from './chapter/chapter7/chapter7.component';
import { Chapter8Component } from './chapter/chapter8/chapter8.component';
import { Chapter9Component } from './chapter/chapter9/chapter9.component';
import { Chapter10Component } from './chapter/chapter10/chapter10.component';
import { Chapter11Component } from './chapter/chapter11/chapter11.component';
import { Chapter12Component } from './chapter/chapter12/chapter12.component';
import { LoginpageComponent } from './login/loginpage/loginpage.component';
import { RegisterpageComponent } from './login/registerpage/registerpage.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticationGuard } from './login/auth.guard';
import { ProfilesAdminComponent } from './profiles-admin/profiles-admin.component';
import { AdminGuard } from './login/admin.guard';



const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch:"full"},
  {path:'login',component:LoginpageComponent, pathMatch:"full"},
  {path:'register',component:RegisterpageComponent},
  {path:'mainpage',component:MainpageComponent},
  {path:'chapter1',component:Chapter1Component,canActivate:[AuthenticationGuard]},
  {path:'chapter2',component:Chapter2Component,canActivate:[AuthenticationGuard]},
  {path:'chapter3',component:Chapter3Component,canActivate:[AuthenticationGuard]},
  {path:'chapter4',component:Chapter4Component,canActivate:[AuthenticationGuard]},
  {path:'chapter5',component:Chapter5Component,canActivate:[AuthenticationGuard]},
  {path:'chapter6',component:Chapter6Component,canActivate:[AuthenticationGuard]},
  {path:'chapter7',component:Chapter7Component,canActivate:[AuthenticationGuard]},
  {path:'chapter8',component:Chapter8Component,canActivate:[AuthenticationGuard]},
  {path:'chapter9',component:Chapter9Component,canActivate:[AuthenticationGuard]},
  {path:'chapter10',component:Chapter10Component,canActivate:[AuthenticationGuard]},
  {path:'chapter11',component:Chapter11Component,canActivate:[AuthenticationGuard]},
  {path:'chapter12',component:Chapter12Component,canActivate:[AuthenticationGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthenticationGuard]},
  {path:'profiles',component:ProfilesAdminComponent,canActivate:[AuthenticationGuard, AdminGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload', anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
