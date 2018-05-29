import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseConfigService } from '../../../core/services/config.service';
import { fuseAnimations } from '../../../core/animations';
import { Router } from '@angular/router';
import { AuthenticationService } from './../guard/authentication.service';
import { MatSnackBar } from '@angular/material';
@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: fuseAnimations
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  token: string;
  loginForm: FormGroup;
  loginFormErrors: any;

  constructor(
    private fuseConfig: FuseConfigService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    public snackBar: MatSnackBar
  ) {
    this.fuseConfig.setSettings({
      layout: {
        navigation: 'none',
        toolbar: 'none',
        footer: 'none'
      }
    });
    this.loginFormErrors = {
      email: {},
      password: {}
    };
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.loginForm.valueChanges.subscribe(() => {
      this.onLoginFormValuesChanged();
    });
    this.authenticationService.logout();
  }
  login() {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['/linwood']);
        } else {
          this.loading = false;
        }
      },
      error => {
        this.loading = false;
        this.snackBar.open('Username or password is incorrect.', 'OK', {
          verticalPosition: 'top',
          duration: 25000
        });
      });
  }
  onLoginFormValuesChanged() {
    for (const field in this.loginFormErrors) {
      if (!this.loginFormErrors.hasOwnProperty(field)) {
        continue;
      }
      // Clear previous errors
      this.loginFormErrors[field] = {};
      // Get the control
      const control = this.loginForm.get(field);
      if (control && control.dirty && !control.valid) {
        this.loginFormErrors[field] = control.errors;
      }
    }
  }
}
