import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '../../../core/animations';

@Component({
  selector: 'app-shipping-schedule',
  templateUrl: './shipping-schedule.component.html',
  styleUrls: ['./shipping-schedule.component.scss'],
  animations: fuseAnimations
})
export class ShippingScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
