import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CalendarEvent } from 'angular-calendar';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Categories } from '../user.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewComponent implements OnInit {
  event: CalendarEvent;
  dialogTitle: string;
  contactForm: FormGroup;
  action: string;
  contact: Categories;

  constructor(
    public dialogRef: MatDialogRef<NewComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formBuilder: FormBuilder
  ) {
    this.action = data.action;

    if (this.action === 'edit') {
      this.dialogTitle = 'Edit Categories';
      this.contact = data.contact;
    }
    else {
      this.dialogTitle = 'New Categories';
      this.contact = new Categories({});
    }

    this.contactForm = this.createContactForm();
  }

  ngOnInit() {
  }

  createContactForm() {
    return this.formBuilder.group({
      id: [this.contact.id],
      type: [this.contact.type],
      title: [this.contact.title],
      description: [this.contact.description],
      alias: [this.contact.alias]
    });
  }
}
