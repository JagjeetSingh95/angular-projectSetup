import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '../../../core/animations';
@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss'],
  animations: fuseAnimations
})
export class NewCustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
