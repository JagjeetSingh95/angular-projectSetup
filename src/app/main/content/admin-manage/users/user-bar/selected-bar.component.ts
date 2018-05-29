import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FuseConfirmDialogComponent } from '../../../../../core/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'user-selected-bar',
    templateUrl: './selected-bar.component.html',
    styleUrls  : ['./selected-bar.component.scss']
})
export class UserSelectedBarComponent implements OnInit
{
    selectedContacts: string[];
    hasSelectedContacts: boolean;
    isIndeterminate: boolean;
    confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

    constructor(
        private contactsService: UserService,
        public dialog: MatDialog
    )
    {
        this.contactsService.onSelectedContactsChanged
            .subscribe(selectedContacts => {
                this.selectedContacts = selectedContacts;
                setTimeout(() => {
                    this.hasSelectedContacts = selectedContacts.length > 0;
                    this.isIndeterminate = (selectedContacts.length !== this.contactsService.user.length && selectedContacts.length > 0);
                }, 0);
            });

    }

    ngOnInit()
    {
    }

    selectAll()
    {
        this.contactsService.selectContacts();
    }

    deselectAll()
    {
        this.contactsService.deselectContacts();
    }

    deleteSelectedContacts()
    {
        this.confirmDialogRef = this.dialog.open(FuseConfirmDialogComponent, {
            disableClose: false
        });

        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete all selected contacts?';

        this.confirmDialogRef.afterClosed().subscribe(result => {
            if ( result )
            {
                this.contactsService.deleteSelectedContacts();
            }
            this.confirmDialogRef = null;
        });
    }

}
