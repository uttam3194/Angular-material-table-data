import { Injectable } from '@angular/core';
import { Employee } from './emp-model';
import { PeriodicElement } from './periodic-element';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: Employee[] = [
    { position: 1, name: 'Uttam', age: 24, cre_dat: new Date()},
    { position: 2, name: 'Ram', age: 28, cre_dat: new Date()},
    { position: 3, name: 'Shyam', age: 30, cre_dat: new Date()},
    { position: 4, name: 'Rohit', age: 35, cre_dat: new Date()},
    { position: 5, name: 'Virat', age: 21, cre_dat: new Date()},
    { position: 6, name: 'Murli', age: 12, cre_dat: new Date()},
    { position: 7, name: 'Sunny', age: 55, cre_dat: new Date()},
    { position: 8, name: 'Dev', age: 90, cre_dat: new Date()},
    { position: 9, name: 'Sam', age: 28, cre_dat: new Date()},
    { position: 10, name: 'John', age: 27, cre_dat: new Date()}
  ];

  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  constructor() { }

  getData() {
    return this.data;
  }

  getElementData() {
    return this.ELEMENT_DATA;
  }

  add(data: PeriodicElement): PeriodicElement {
    this.ELEMENT_DATA.push(data);
    return data;
  }
}
