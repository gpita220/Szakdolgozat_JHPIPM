import { Route, Router } from '@angular/router';
import { StorageService } from '../Service/storage.service';
import { AuthService } from './../Service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  userIsAdmin:boolean=false;
  constructor(private storageService: StorageService, private route :Router){

  }
  ngOnInit(): void {
    this.userIsAdmin=this.storageService.userIsAdmin();
    
  }
  public isLoggedIn():boolean{
    return this.storageService.isLoggedIn();
  }
  public onLogout():void{
    this.storageService.clean();
    this.userIsAdmin=false;
    this.route.navigate(["login"]);
  }

}
