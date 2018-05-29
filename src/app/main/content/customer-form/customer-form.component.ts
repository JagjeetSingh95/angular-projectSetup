import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '../../../core/animations';
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
  animations: fuseAnimations
})
export class CustomerFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
