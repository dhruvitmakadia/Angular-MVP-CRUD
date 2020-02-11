import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListContainerComponent } from './employee-list-container/employee-list-container';
import { EmployeeFormContainerComponent } from './employee-form-container/employee-form-container';


const routes: Routes = [
  {
    path: 'employee/list',
    component: EmployeeListContainerComponent
  },
  {
    path: 'employee/add',
    component: EmployeeFormContainerComponent
  },
  {
    path: 'employee/edit/:id',
    component: EmployeeFormContainerComponent
  },
  {
    path: '',
    redirectTo: 'employee/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
