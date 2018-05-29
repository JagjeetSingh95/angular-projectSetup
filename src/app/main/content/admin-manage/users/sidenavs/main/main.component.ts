import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
    selector   : 'user-main-sidenav',
    templateUrl: './main.component.html',
    styleUrls  : ['./main.component.scss']
})
export class UserMainSidenavComponent implements OnInit
{
    user: any;
    filterBy: string;

    constructor(private contactsService: UserService)
    {
        this.filterBy = 'all';
        this.contactsService.onUserDataChanged.subscribe(user => {
            this.user = user;
        });
    }

    ngOnInit()
    {
    }

    changeFilter(filter)
    {
        this.filterBy = filter;
        this.contactsService.onFilterChanged.next(this.filterBy);
    }
}
