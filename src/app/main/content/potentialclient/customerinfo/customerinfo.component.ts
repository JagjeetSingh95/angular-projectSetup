import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { LeadService } from '../../Services/lead.service';
import { LeadfieldsService } from '../../Services/leadfields.service';
import { fuseAnimations } from '../../../../core/animations';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import { Subscription } from 'rxjs/Subscription';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseUtils } from '../../../../core/fuseUtils';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Lead } from '../lead.model';
import { Leadfield } from '../leadfield.model';

@Component({
  selector: 'app-customerinfo',
  templateUrl: './customerinfo.component.html',
  styleUrls: ['./customerinfo.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class CustomerinfoComponent implements OnDestroy, OnInit {
  lead = new Lead();
  leadfields = [];
  onLeadChanged: Subscription;
  onLeadfieldChanged: Subscription;

  pageType: string;
  leadForm: FormGroup;
  leadFormErrors: any;

  constructor(
    private router: Router,
    private leadService: LeadService,
    private leadFieldService: LeadfieldsService,
    private fb: FormBuilder,
    public snackBar: MatSnackBar
  ) {
    this.leadFormErrors = {
      email: {},
      firstname: {}
    };
  }
  ngOnInit() {
    // Subscribe to update product on changes
    this.onLeadChanged =
      this.leadService.onLeadsChanged
        .subscribe(data => {
          if (data) {
            this.lead = new Lead(data);
            this.pageType = 'edit';
          }
          else {
            this.pageType = 'new';
            this.lead = new Lead();
          }
        });
    this.onLeadfieldChanged = this.leadFieldService.onLeadFieldsChanged.subscribe(fields => {
      this.leadfields = fields;
      this.leadForm = this.createleadForm();
      console.log("Lead Form");
      console.log(this.leadForm);
    });

  }
  createleadForm() {
    let formGroup = {
      firstname: [this.lead.firstname, Validators.required],
      lastname: [this.lead.lastname],
      company: [this.lead.company.name],
      position: [this.lead.position],
      email: [this.lead.email, [Validators.required, Validators.email]],
      phone: [this.lead.phone],
      mobile: [this.lead.mobile],
      address1: [this.lead.address1],
      address2: [this.lead.address2],
      city: [this.lead.city],
      state: [this.lead.state],
      zipCode: [this.lead.zipCode]
    };
    // Add the dynamic lead field form fields
    this.leadfields.map(leadField => {
      formGroup[leadField.alias] = [this.lead.LeadFieldValues[leadField.id]];
    });
    return this.fb.group(formGroup);
  }

  saveLead() {
    const data = this.leadForm.getRawValue();
    this.leadService.updateLead(data)
      .then(() => {
        console.log("data");
        console.log(data);
        // Trigger the subscription with new data
        this.leadService.onLeadsChanged.next(data);
        // Show the success message
        this.snackBar.open('Lead saved', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
        console.log("Entered data");
        this.router.navigate(['/potentialclient']);
      });
  }
  addLead() {
    const data = this.leadForm.getRawValue();
    this.leadService.updateLead(data)
      .then(() => {

        // Trigger the subscription with new data
        this.leadService.onLeadsChanged.next(data);

        // Show the success message
        this.snackBar.open('Lead added', 'OK', {
          verticalPosition: 'top',
          duration: 1000
        });
        this.router.navigate(['/potentialclient']);
      });
  }
  ngOnDestroy() {
    this.onLeadChanged.unsubscribe();
  }
}
