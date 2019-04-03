import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule,
         MatToolbarModule,
         MatButtonModule,
         MatPaginatorModule,
         MatSortModule,
         MatFormFieldModule,
         MatInputModule,
         MatCheckboxModule,
         MatDialogModule
         } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const angMat = [CommonModule,
  MatTableModule,
  MatToolbarModule,
  MatButtonModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatDialogModule,
  FormsModule,
  ReactiveFormsModule
  ];

@NgModule({
  declarations: [],
  imports: angMat,
  exports: angMat
})
export class AngMaterialModule { }
