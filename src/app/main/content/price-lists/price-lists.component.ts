import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '../../../core/animations';
@Component({
  selector: 'app-price-lists',
  templateUrl: './price-lists.component.html',
  styleUrls: ['./price-lists.component.scss'],
  animations: fuseAnimations
})
export class PriceListsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
