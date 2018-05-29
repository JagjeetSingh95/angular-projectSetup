import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '../../../core/animations';
@Component({
  selector: 'app-drafting-schedule',
  templateUrl: './drafting-schedule.component.html',
  styleUrls: ['./drafting-schedule.component.scss'],
  animations: fuseAnimations
})
export class DraftingScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
