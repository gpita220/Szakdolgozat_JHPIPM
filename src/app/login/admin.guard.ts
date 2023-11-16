import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service';
import { StorageService } from '../Service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard {
  constructor(
    private authService: AuthService,
    private router: Router,
    private storageService:StorageService
  ) {}

  canActivate():boolean{
    if(!this.storageService.userIsAdmin()){
        alert("Nem vagy jogosult ehhez az oldalhoz!");
        this.router.navigate(['/mainpage']);
        return false;
    }
    return true;
  }
  
}
