import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { StudentregisterComponent } from './studentform/studentregister/studentregister.component';
import { StudenteditorComponent } from './studentform/studenteditor/studenteditor.component';
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

const routes: Routes = [
  {path:'',redirectTo: '/mainpage', pathMatch: 'full'},
  {path:'mainpage', component:MainpageComponent},
  {path:'studentregister',component:StudentregisterComponent},
  {path:'studenteditor', component:StudenteditorComponent},
  {path:'chapter1',component:Chapter1Component},
  {path:'chapter2',component:Chapter2Component},
  {path:'chapter3',component:Chapter3Component},
  {path:'chapter4',component:Chapter4Component},
  {path:'chapter5',component:Chapter5Component},
  {path:'chapter6',component:Chapter6Component},
  {path:'chapter7',component:Chapter7Component},
  {path:'chapter8',component:Chapter8Component},
  {path:'chapter9',component:Chapter9Component},
  {path:'chapter10',component:Chapter10Component},
  {path:'chapter11',component:Chapter11Component},
  {path:'chapter12',component:Chapter12Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
