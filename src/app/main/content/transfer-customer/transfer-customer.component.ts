import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '../../../core/animations';

@Component({
  selector: 'app-transfer-customer',
  templateUrl: './transfer-customer.component.html',
  styleUrls: ['./transfer-customer.component.scss'],
  animations: fuseAnimations
})
export class TransferCustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
