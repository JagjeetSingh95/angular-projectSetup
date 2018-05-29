import { Component, OnInit } from '@angular/core';
import { LeadService } from '../../../Services/lead.service';
@Component({
  selector: 'potentialclient-main-sidenav',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class PotentialclientMainSidenavComponent implements OnInit {
  user: any;
  filterBy: string;

  constructor(private leadService: LeadService) {
    this.filterBy = 'all';
    this.leadService.onUserDataChanged.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
  }

  changeFilter(filter) {
    this.filterBy = filter;
    this.leadService.onFilterChanged.next(this.filterBy);
  }
}
