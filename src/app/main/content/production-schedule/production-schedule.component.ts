import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '../../../core/animations';
@Component({
  selector: 'app-production-schedule',
  templateUrl: './production-schedule.component.html',
  styleUrls: ['./production-schedule.component.scss'],
  animations: fuseAnimations
})
export class ProductionScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
