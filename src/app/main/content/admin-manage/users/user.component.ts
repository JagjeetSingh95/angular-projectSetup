import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from './user.service';
import { fuseAnimations } from '../../../../core/animations';
import { FormControl, FormGroup } from '@angular/forms';
import { UserFormDialogComponent } from './user-form/user-form.component';
import { MatDialog } from '@angular/material';
import 'rxjs/add/operator/distinctUntilChanged';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector     : 'app-user',
    templateUrl  : './user.component.html',
    styleUrls    : ['./user.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class UserComponent implements OnInit, OnDestroy
{
    hasSelectedContacts: boolean;
    searchInput: FormControl;
    dialogRef: any;
    onSelectedContactsChangedSubscription: Subscription;

    constructor(
        private contactsService: UserService,
        public dialog: MatDialog
    )
    {
        this.searchInput = new FormControl('');
    }

    newContact()
    {
        this.dialogRef = this.dialog.open(UserFormDialogComponent, {
            panelClass: 'contact-form-dialog',
            data      : {
                action: 'new'
            }
        });

        this.dialogRef.afterClosed()
            .subscribe((response: FormGroup) => {
                if ( !response )
                {
                    return;
                }

                this.contactsService.updateContact(response.getRawValue());

            });

    }

    ngOnInit()
    {
        this.onSelectedContactsChangedSubscription =
            this.contactsService.onSelectedContactsChanged
                .subscribe(selectedContacts => {
                    this.hasSelectedContacts = selectedContacts.length > 0;
                });
        this.searchInput.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(searchText => {
                this.contactsService.onSearchTextChanged.next(searchText);
            });
    }

    ngOnDestroy()
    {
        this.onSelectedContactsChangedSubscription.unsubscribe();
    }
}
