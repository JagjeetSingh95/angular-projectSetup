import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router'; import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class AuthenticationService {
  public auth_token: string;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http, private router: Router
  ) {
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.auth_token = currentUser && currentUser.auth_token;
  }
  //
  getTokenExpirationDate(token: string): number {
    const decoded = jwt_decode(token);
    if (decoded.exp === undefined) return null;
    return decoded.exp;
  }

  isTokenExpired(token: string = this.auth_token): boolean {
    if (!token) token = this.auth_token;
    if (!token) return true;
    const tokenTimestamp = this.getTokenExpirationDate(token);
    if (tokenTimestamp == null) return false;
    var currentEpoch = Math.round((new Date()).getTime() / 1000);
    return tokenTimestamp < currentEpoch;
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post('/api/auth/login', JSON.stringify({ email: email, password: password }), { headers: this.headers })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let auth_token = response.json() && response.json().auth_token;
        if (auth_token) {
          // set token property
          this.auth_token = auth_token;
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ email: email, auth_token: auth_token}));
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
          }
      });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.auth_token = null;
    localStorage.removeItem('currentUser');
  }

  isLogin() {
    if (localStorage.getItem('currentUser')) {//check if localstorage have current User then return
      if (!this.isTokenExpired()) {//check token expire or not 
        return true;
      }
    }
    return false;
  }
 
  hasAdminAccess() {
    return this.hasRole('admin_access');
  }

  hasRole(roleName: string) {
    if (localStorage.getItem('currentUser')) {
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      var token = currentUser.auth_token;
      const decode = jwt_decode(token);
      for (var count = 0; count < decode.rol.length; count++) {
        if (decode.rol[count] == roleName) {
          return true;
        }
      }
    }
    else {
      return false;
    }
  }
}
