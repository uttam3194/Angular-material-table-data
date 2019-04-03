import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngMaterialModule } from './ang-material/ang-material.module';
import { EmployeeComponent } from './employee/employee.component';
import { TableSelectionComponent } from './table-selection/table-selection.component';
import { TableSelectionAddComponent } from './table-selection-add/table-selection-add.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    TableSelectionComponent,
    TableSelectionAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngMaterialModule
  ],
  entryComponents: [TableSelectionAddComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
