import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { TableSelectionComponent } from './table-selection/table-selection.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/emp',
    pathMatch: 'full'
  },
  { path: 'emp', component: EmployeeComponent },
  {path: 'data', component: TableSelectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
