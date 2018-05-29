import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { Element } from './element';
import { CategoriesService } from './categories.service';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { NewComponent } from './new/new.component';
import { MatDialog } from '@angular/material';
import { fuseAnimations } from '../../../../core/animations';
import { FormControl, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/distinctUntilChanged';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  animations: fuseAnimations
})
export class CategoriesComponent {

   fleetData ;
    displayedColumns = ['select', 'title', 'type', 'id'];
    dataSource = new MatTableDataSource(this.fleetData);


  
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults 
        this.dataSource.filter = filterValue;
      }



       hasSelectedContacts: boolean;
  searchInput: FormControl;
  dialogRef: any;
  onSelectedContactsChangedSubscription: Subscription;

      constructor(public dialog: MatDialog,private customService: CategoriesService)
      {
        this.searchInput = new FormControl('');
        customService.getUser().subscribe(
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

     
  newContact() {
    this.dialogRef = this.dialog.open(NewComponent, {
      panelClass: 'contact-form-dialog',
      data: {
        action: 'new'
      }
    });
    
}
  
}
