import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Leadfield } from '../potentialclient/leadfield.model';
import { FuseUtils } from '../../../core/fuseUtils';
import { Subject } from 'rxjs/Subject';
import { AuthenticationService } from '../guard/authentication.service';

@Injectable()
export class LeadfieldsService implements Resolve<any>
{
  onLeadFieldsChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onSelectedLeadsChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onUserDataChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onSearchTextChanged: Subject<any> = new Subject();
  onFilterChanged: Subject<any> = new Subject();

  leadfields: Leadfield[];
  user: any;
  selectedLeadfields: string[] = [];

  searchText: string;
  filterBy: string;
  constructor(private http: HttpClient,
    private authService: AuthenticationService) {

  }
  /**
   * The Leads App Main Resolver
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      Promise.all([
        this.getLeadfieldsbyorder(),
        this.getUserData()
      ]).then(
        ([files]) => {
          this.onSearchTextChanged.subscribe(searchText => {
            this.searchText = searchText;
            this.getLeadfields();
          });
          this.onFilterChanged.subscribe(filter => {
            this.filterBy = filter;
            this.getLeadfields();
          });
          resolve();
        },
        reject
        );
    });
  }
  getLeadfields(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('api/leadfield')
        .subscribe((response: any) => {
          this.leadfields = response;
          if (this.filterBy === 'starred') {
            this.leadfields = this.leadfields.filter(_leadfield => {
              return this.user.starred.includes(_leadfield.id);
            });
          }
          if (this.filterBy === 'frequent') {
            this.leadfields = this.leadfields.filter(_lead => {
              return this.user.frequentContacts.includes(_lead.id);
            });
          }
          if (this.searchText && this.searchText !== '') {
            this.leadfields = FuseUtils.filterArrayByString(this.leadfields, this.searchText);
          }
          this.leadfields = this.leadfields.map(lead => {
            return new Leadfield(lead);
          });
          this.onLeadFieldsChanged.next(this.leadfields);
          resolve(this.leadfields);
        }, reject);
    }
    );
  }

  getLeadfieldsbyorder(): Promise<any> {
    const options = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.authService.auth_token }) };
    return new Promise((resolve, reject) => {
      this.http.get('api/leadfield/byorder', options)
        .subscribe((response: any) => {
          this.leadfields = response;
          if (this.filterBy === 'starred') {
            this.leadfields = this.leadfields.filter(_potentiallead => {
              return this.user.starred.includes(_potentiallead.id);
            });
          }
          if (this.filterBy === 'frequent') {
            this.leadfields = this.leadfields.filter(_potentiallead => {
              return this.user.frequentContacts.includes(_potentiallead.id);
            });
          }
          if (this.searchText && this.searchText !== '') {
            this.leadfields = FuseUtils.filterArrayByString(this.leadfields, this.searchText);
          }
          this.leadfields = this.leadfields.map(potentiallead => {
            return new Leadfield(potentiallead);
          });
          this.onLeadFieldsChanged.next(this.leadfields);
          resolve(this.leadfields);
        }, reject);
    }
    );
  }

  getUserData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('api/contacts-user/5725a6802d10e277a0f35724')
        .subscribe((response: any) => {
          this.user = response;
          this.onUserDataChanged.next(this.user);
          resolve(this.user);
        }, reject);
    }
    );
  }

  /**
   * Toggle selected contact by id
   * @param id
   */
  toggleSelectedleadfied(id) {
    // First, check if we already have that todo as selected...
    if (this.selectedLeadfields.length > 0) {
      const index = this.selectedLeadfields.indexOf(id);

      if (index !== -1) {
        this.selectedLeadfields.splice(index, 1);

        // Trigger the next event
        this.onSelectedLeadsChanged.next(this.selectedLeadfields);

        // Return
        return;
      }
    }
    // If we don't have it, push as selected
    this.selectedLeadfields.push(id);
    // Trigger the next event
    this.onSelectedLeadsChanged.next(this.selectedLeadfields);
  }
  /**
   * Toggle select all
   */
  toggleSelectAll() {
    if (this.selectedLeadfields.length > 0) {
      this.deselectLeadfields();
    }
    else {
      this.selectLeadfield();
    }
  }
  selectLeadfield(filterParameter?, filterValue?) {
    this.selectedLeadfields = [];
    // If there is no filter, select all todos
    if (filterParameter === undefined || filterValue === undefined) {
      this.selectedLeadfields = [];
      this.leadfields.map(lead => {
        this.selectedLeadfields.push(lead.id);
      });
    }
    else {
      /* this.selectedContacts.push(...
           this.contacts.filter(todo => {
               return todo[filterParameter] === filterValue;
           })
       );*/
    }
    // Trigger the next event
    this.onSelectedLeadsChanged.next(this.selectedLeadfields);
  }

  updateLeadfield(leadfieldData) {
    return new Promise((resolve, reject) => {

      this.http.post('api/leadfield/', { ...leadfieldData })
        .subscribe(response => {
          this.getLeadfields();
          resolve(response);
        });
    });
  }

  updateUserData(userData) {
    return new Promise((resolve, reject) => {
      this.http.post('api/contacts-user/' + this.user.id, { ...userData })
        .subscribe(response => {
          this.getUserData();
          this.getLeadfields();
          resolve(response);
        });
    });
  }
  deselectLeadfields() {
    this.selectedLeadfields = [];

    // Trigger the next event
    this.onSelectedLeadsChanged.next(this.selectedLeadfields);
  }
  deleteleadfield(leadfield) {
    const leadIndex = this.leadfields.indexOf(leadfield);
    this.leadfields.splice(leadIndex, 1);
    this.onLeadFieldsChanged.next(this.leadfields);
  }
  deleteSelectedleadfields() {
    for (const leadfieldId of this.selectedLeadfields) {
      const leadfield = this.leadfields.find(_leadfield => {
        return _leadfield.id === leadfieldId;
      });
      const leadIndex = this.leadfields.indexOf(leadfield);
      this.leadfields.splice(leadIndex, 1);
    }
    this.onLeadFieldsChanged.next(this.leadfields);
    this.deselectLeadfields();
  }
}
