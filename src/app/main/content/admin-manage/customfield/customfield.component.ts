import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { Element } from './element';
import { CustomfieldService } from './customfield.service';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { fuseAnimations } from '../../../../core/animations';

@Component({
  selector: 'app-customfield',
  templateUrl: './customfield.component.html',
  styleUrls: ['./customfield.component.scss'],
  animations: fuseAnimations
})
export class CustomfieldComponent {

   fleetData ;
    displayedColumns = ['select', 'name', 'group', 'label', 'alias', 'id'];
    dataSource = new MatTableDataSource(this.fleetData);


  
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults 
        this.dataSource.filter = filterValue;
      }

      constructor(private customService: CustomfieldService)
      {customService.getUser().subscribe(
        data => {
         this.fleetData = data;
         this.dataSource.data = this.fleetData;  
        });}

    selection = new SelectionModel<Element>(true, []);
 
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  
    masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.data.forEach(
            row => this.selection.select(<any>row));
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;//pagiging
    @ViewChild(MatSort) sort: MatSort;//sort

    
    ngAfterViewInit() {
      this.dataSource.sort = this.sort;//sort
      this.dataSource.paginator = this.paginator;//paging
    }
    
}
  
