import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
    private authService: AuthenticationService) { }
    canActivate() {
      if (this.authService.isLogin()) { 
          // logged in so return true
          return true;       
      }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}
