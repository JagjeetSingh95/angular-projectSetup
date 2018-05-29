import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Lead } from '../potentialclient/lead.model';
import { FuseUtils } from '../../../core/fuseUtils';
import { Subject } from 'rxjs/Subject';
import { AuthenticationService } from '../guard/authentication.service';
@Injectable()
export class LeadService implements Resolve<any>
{
  onLeadsChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onpotentialLeadsChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onSelectedLeadsChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onUserDataChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onSearchTextChanged: Subject<any> = new Subject();
  onFilterChanged: Subject<any> = new Subject();
  leads: Lead[];
  user: any;
  selectedLeads: string[] = [];

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
        this.getLeads(),
        //this.getpotentialLeads(),
        this.getUserData()
      ]).then(
        ([files]) => {
          this.onSearchTextChanged.subscribe(searchText => {
            this.searchText = searchText;
            this.getLeads();
          });
          this.onFilterChanged.subscribe(filter => {
            this.filterBy = filter;
            this.getLeads();
          });
          resolve();
        },
        reject
        );
    });
  }
  getLeads(): Promise<any> {
    return new Promise((resolve, reject) => {
      const options = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.authService.auth_token }) };
      this.http.get('api/lead', options)
        .subscribe((response: any) => {
          this.leads = response;

          this.leads = this.leads.map(lead => {
            return new Lead(lead);
          });
          this.onLeadsChanged.next(this.leads);
          resolve(this.leads);
        }, reject);
    }
    );
  }
  /**
  
   
  getpotentialLeads(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('api/lead')
        .subscribe((response: any) => {
          this.leads = response;          
          this.leads = this.leads.map(potentiallead => {
            return new Lead(potentiallead);
          });
          this.onLeadsChanged.next(this.leads);
          resolve(this.leads);
        }, reject);
    }
    );
  }
  */
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
  toggleSelectedContact(id) {
    // First, check if we already have that todo as selected...
    if (this.selectedLeads.length > 0) {
      const index = this.selectedLeads.indexOf(id);

      if (index !== -1) {
        this.selectedLeads.splice(index, 1);

        // Trigger the next event
        this.onSelectedLeadsChanged.next(this.selectedLeads);

        // Return
        return;
      }
    }
    // If we don't have it, push as selected
    this.selectedLeads.push(id);
    // Trigger the next event
    this.onSelectedLeadsChanged.next(this.selectedLeads);
  }
  /**
   * Toggle select all
   */
  toggleSelectAll() {
    if (this.selectedLeads.length > 0) {
      this.deselectLeads();
    }
    else {
      this.selectLead();
    }
  }
  selectLead(filterParameter?, filterValue?) {
    this.selectedLeads = [];
    // If there is no filter, select all todos
    if (filterParameter === undefined || filterValue === undefined) {
      this.selectedLeads = [];
      this.leads.map(lead => {
        this.selectedLeads.push(lead.id);
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
    this.onSelectedLeadsChanged.next(this.selectedLeads);
  }
  
  updateLead(leadData) {
    return new Promise((resolve, reject) => {
      console.log("leadData");
      console.log(leadData);
      const options = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.authService.auth_token }) };
      this.http.post('api/lead/', { ...leadData }, options)
        .subscribe(response => {
          console.log("response");
          console.log(response);
          this.getLeads();
          resolve(response);
        },
        reject => { console.log(reject.error); }
        );
      console.log("out of response");
    });
  }
  /**
  updatepotentialLead(potentialLeadData) {
    return new Promise((resolve, reject) => {

      this.http.post('api/potentialLeads/', { ...potentialLeadData })
        .subscribe(response => {
          this.getpotentialLeads();
          resolve(response);
        });
    });
  }
  */
  updateUserData(userData) {
    return new Promise((resolve, reject) => {
      this.http.post('api/contacts-user/' + this.user.id, { ...userData })
        .subscribe(response => {
          this.getUserData();
          this.getLeads();
          resolve(response);
        });
    });
  }
  deselectLeads() {
    this.selectedLeads = [];

    // Trigger the next event
    this.onSelectedLeadsChanged.next(this.selectedLeads);
  }
  deletelead(lead) {
    const leadIndex = this.leads.indexOf(lead);
    this.leads.splice(leadIndex, 1);
    this.onLeadsChanged.next(this.leads);
  }
  deleteSelectedleads() {
    for (const leadId of this.selectedLeads) {
      const lead = this.leads.find(_lead => {
        return _lead.id === leadId;
      });
      const leadIndex = this.leads.indexOf(lead);
      this.leads.splice(leadIndex, 1);
    }
    this.onLeadsChanged.next(this.leads);
    this.deselectLeads();
  }
}
