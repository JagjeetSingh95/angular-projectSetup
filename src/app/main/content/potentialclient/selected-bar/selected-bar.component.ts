import { Component, OnInit } from '@angular/core';
import { LeadService } from '../../Services/lead.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FuseConfirmDialogComponent } from '../../../../core/components/confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'potentialclient-selected-bar',
  templateUrl: './selected-bar.component.html',
  styleUrls: ['./selected-bar.component.scss']
})
export class PotentialclientSelectedBarComponent implements OnInit {
  selectedLeads: string[];
  hasSelectedLeads: boolean;
  isIndeterminate: boolean;
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
  constructor(
    private leadService: LeadService,
    public dialog: MatDialog
  ) {
    this.leadService.onSelectedLeadsChanged
      .subscribe(selectedContacts => {
        this.selectedLeads = selectedContacts;
        setTimeout(() => {
          this.hasSelectedLeads = selectedContacts.length > 0;
          this.isIndeterminate = (selectedContacts.length !== this.leadService.leads.length && selectedContacts.length > 0);
        }, 0);
      });
  }
  ngOnInit() {
  }
  selectAll() {
    this.leadService.selectLead();
  }
  deselectAll() {
    this.leadService.deselectLeads();
  }
  deleteSelectedContacts() {
    this.confirmDialogRef = this.dialog.open(FuseConfirmDialogComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete all selected contacts?';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.leadService.deleteSelectedleads();
      }
      this.confirmDialogRef = null;
    });
  }
}
