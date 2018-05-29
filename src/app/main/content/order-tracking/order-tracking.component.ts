import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '../../../core/animations';
@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.scss'],
  animations: fuseAnimations
})
export class OrderTrackingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
