import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '../../../core/animations';
@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss'],
  animations: fuseAnimations
})
export class RemindersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
