import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table-selection-add',
  templateUrl: './table-selection-add.component.html',
  styleUrls: ['./table-selection-add.component.css']
})
export class TableSelectionAddComponent implements OnInit {

  AddForm: FormGroup = new FormGroup({
    position: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
    weight: new FormControl(null, Validators.required),
    symbol: new FormControl(null, Validators.required)
  });

  constructor(private _data: DataService) { }

  ngOnInit() {
  }

  add() {
    if ( !this.AddForm.valid ) {
      console.log('invalid form');
      return;
    }
    // this._data.add(JSON.stringify(this.AddForm.value));
    this._data.add(this.AddForm.value);
  }

}
