import { Injectable} from '@angular/core';
import {Router
  } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { CanActivate } from '@angular/router/src/interfaces';
@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router, private _service: AuthenticationService) {
    }

    canActivate() {
      if (this._service.hasAdminAccess()) { 
        // Check Admin access or not
        return true;       
      }
      else { // not logged in so redirect to login page
        this.router.navigate(['/login']);}
        return false;
      }
    }

