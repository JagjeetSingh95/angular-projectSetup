import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { LeadService } from '../Services/lead.service';
import { fuseAnimations } from '../../../core/animations';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import 'rxjs/add/operator/distinctUntilChanged';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'fuse-contacts',
  templateUrl: './potentialclient.component.html',
  styleUrls: ['./potentialclient.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class PotentialclientComponent implements OnInit, OnDestroy {
  hasSelectedLeads: boolean;
  searchInput: FormControl;
  dialogRef: any;
  onSelectedLeadsChangedSubscription: Subscription;
  constructor(
    private leadService: LeadService,
    public dialog: MatDialog
  ) {
    this.searchInput = new FormControl('');
  }
  ngOnInit() {
    this.onSelectedLeadsChangedSubscription =
      this.leadService.onSelectedLeadsChanged
        .subscribe(selectedLeads => {
          this.hasSelectedLeads = selectedLeads.length > 0;
        });
    this.searchInput.valueChanges
      //.debounceTime(300)
      .distinctUntilChanged()
      .subscribe(searchText => {
        this.leadService.onSearchTextChanged.next(searchText);
      });
  }
  ngOnDestroy() {
    this.onSelectedLeadsChangedSubscription.unsubscribe();
  }
}
