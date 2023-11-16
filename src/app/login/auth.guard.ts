import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
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
