import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatPaginator, MatTableDataSource} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { DataService } from '../data.service';
import { Employee } from '../emp-model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  dataSource: any; // Employee[];
  displayedColumns: String[] = ['select', 'position', 'name', 'age', 'cre_dat'];
  selection = new SelectionModel<Employee>(true, []);

  constructor(private _data: DataService) {
    // this.dataSource = this._data.getData();
    // this.dataSource = new MatTableDataSource<Employee>(this._data.getData());
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Employee>(this._data.getData());
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Employee): String {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

}
