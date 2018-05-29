import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '../../../core/animations';

@Component({
  selector: 'app-sales-pipeline',
  templateUrl: './sales-pipeline.component.html',
  styleUrls: ['./sales-pipeline.component.scss'],
  animations: fuseAnimations
})
export class SalesPipelineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
