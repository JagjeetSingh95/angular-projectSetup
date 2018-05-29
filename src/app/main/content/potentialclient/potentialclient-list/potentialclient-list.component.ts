import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { LeadService } from '../../Services/lead.service';
import { Observable } from 'rxjs/Observable';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FuseConfirmDialogComponent } from '../../../../core/components/confirm-dialog/confirm-dialog.component';
import { FormGroup } from '@angular/forms';
import { DataSource } from '@angular/cdk/collections';
import { fuseAnimations } from '../../../../core/animations';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'potentialclient-list',
  templateUrl: './potentialclient-list.component.html',
  styleUrls: ['./potentialclient-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class PotentialclientListComponent implements OnInit, OnDestroy {
  @ViewChild('dialogContent') dialogContent: TemplateRef<any>;

  leads: any;
  user: any;
  dataSource: FilesDataSource | null;
  displayedColumns = ['checkbox', 'CustomerName', 'position', 'email', 'mobile', 'city', 'state', 'id', 'buttons'];
  selectedLeads: any[];
  checkboxes: {};

  onLeadsChangedSubscription: Subscription;
  onSelectedLeadsChangedSubscription: Subscription;
  onUserDataChangedSubscription: Subscription;

  dialogRef: any;

  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

  constructor(
    private leadService: LeadService,
    public dialog: MatDialog
  ) {
    this.onLeadsChangedSubscription =
      this.leadService.onLeadsChanged.subscribe(leads => {

      this.leads = leads;
      console.log(leads);
        this.checkboxes = {};
        leads.map(lead => {
          this.checkboxes[lead.id] = false;
        });
      });

    this.onSelectedLeadsChangedSubscription =
      this.leadService.onSelectedLeadsChanged.subscribe(selectedLeads => {
        for (const id in this.checkboxes) {
          if (!this.checkboxes.hasOwnProperty(id)) {
            continue;
          }

          this.checkboxes[id] = selectedLeads.includes(id);
        }
        this.selectedLeads = selectedLeads;
      });

    this.onUserDataChangedSubscription =
      this.leadService.onUserDataChanged.subscribe(user => {
        this.user = user;
      });

  }

  ngOnInit() {
    this.dataSource = new FilesDataSource(this.leadService);
  }

  ngOnDestroy() {
    this.onLeadsChangedSubscription.unsubscribe();
    this.onSelectedLeadsChangedSubscription.unsubscribe();
    this.onUserDataChangedSubscription.unsubscribe();
  }
  /**
   * Delete Contact
   */
  deleteContact(lead) {
    this.confirmDialogRef = this.dialog.open(FuseConfirmDialogComponent, {
      disableClose: false
    });

    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.leadService.deletelead(lead);
      }
      this.confirmDialogRef = null;
    });
  }
  onSelectedChange(leadId) {
    this.leadService.toggleSelectedContact(leadId);
  }
  toggleStar(leadId) {
    if (this.user.starred.includes(leadId)) {
      this.user.starred.splice(this.user.starred.indexOf(leadId), 1);
    }
    else {
      this.user.starred.push(leadId);
    }
    this.leadService.updateUserData(this.user);
  }
}

export class FilesDataSource extends DataSource<any>
{
  constructor(private leadService: LeadService) {
    super();
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<any[]> {
    return this.leadService.onLeadsChanged;
  }
  disconnect() {
  }
}
