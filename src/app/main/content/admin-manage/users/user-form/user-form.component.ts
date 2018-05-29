import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CalendarEvent } from 'angular-calendar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'user-form-dialog',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class UserFormDialogComponent implements OnInit {
  event: CalendarEvent;
  dialogTitle: string;
  userForm: FormGroup;
  action: string;
  user: User;

  constructor(
    public dialogRef: MatDialogRef<UserFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formBuilder: FormBuilder
  ) {
    this.action = data.action;

    if (this.action === 'edit') {
      this.dialogTitle = 'Edit User';
      this.user = data.contact;
    }
    else {
      this.dialogTitle = 'New User';
      this.user = new User({
        id: '',
        identity: {
          email: '',
          userName: '',
          password: '',
          confirmPassword: ''
        },
        profile: {
          firstName: '',
          lastName: '',
          position: '',
          signature: '',
          id: ''
        },
        userRoles: []
      });
    }

    this.userForm = this.createUserForm();
  }

  ngOnInit() {
  }

  createUserForm() {
    return this.formBuilder.group({
      firstName: [this.user.profile.firstName],
      lastName: [this.user.profile.lastName],
      signature: [this.user.profile.signature],
      email: [this.user.identity.email],
      username: [this.user.identity.userName],
      password: [this.user.identity.password],
      position: [this.user.profile.position],
      confirmPassword: [this.user.identity.confirmPassword]
    });
  }

}
