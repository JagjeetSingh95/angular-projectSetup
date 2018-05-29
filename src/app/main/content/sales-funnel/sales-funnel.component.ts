import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '../../../core/animations';

@Component({
  selector: 'app-sales-funnel',
  templateUrl: './sales-funnel.component.html',
  styleUrls: ['./sales-funnel.component.scss'],
  animations: fuseAnimations
})
export class SalesFunnelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
