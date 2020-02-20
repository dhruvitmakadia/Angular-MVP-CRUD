import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';

import { EmployeeFormContainer } from './employee-form-container/employee-form-container';
import { EmployeeFormPresentation } from './employee-form-container/employee-form-presentation/employee-form-presentation';
import { EmployeeListContainer } from './employee-list-container/employee-list-container';
import { EmployeeListPresentation } from './employee-list-container/employee-list-presentation/employee-list-presentation';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeService } from './employee.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EmployeeFormContainer,
    EmployeeListContainer,
    EmployeeListPresentation,
    EmployeeFormPresentation
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [
    EmployeeService
  ]
})
export class EmployeeModule { }
