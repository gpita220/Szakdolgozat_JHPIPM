import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service';
import { StorageService } from '../Service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard {
  constructor(
    private authService: AuthService,
    private router: Router,
    private storageService:StorageService
  ) {}
  
  canActivate(): boolean {
    if (!this.storageService.isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
  
}
