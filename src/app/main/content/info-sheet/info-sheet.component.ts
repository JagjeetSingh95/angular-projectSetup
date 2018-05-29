import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '../../../core/animations';
@Component({
  selector: 'app-info-sheet',
  templateUrl: './info-sheet.component.html',
  styleUrls: ['./info-sheet.component.scss'],
  animations: fuseAnimations
})
export class InfoSheetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
