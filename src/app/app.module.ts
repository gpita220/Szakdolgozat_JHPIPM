import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Chapter1Component } from './chapter/chapter1/chapter1.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { AuthGuard, AuthService } from '@auth0/auth0-angular';
import { HttpRequestInterceptor } from './login/httpRequestInterceptor';
import { StorageService } from './Service/storage.service';
import { ProfilesAdminComponent } from './profiles-admin/profiles-admin.component';
import { BnNgIdleService } from 'bn-ng-idle';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainpageComponent,
    Chapter1Component,
    Chapter2Component,
    Chapter3Component,
    Chapter4Component,
    Chapter5Component,
    Chapter6Component,
    Chapter7Component,
    Chapter8Component,
    Chapter9Component,
    Chapter10Component,
    Chapter11Component,
    Chapter12Component,
    LoginpageComponent,
    RegisterpageComponent,
    ProfileComponent,
    ProfilesAdminComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
              AuthGuard, AuthService, StorageService,BnNgIdleService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
