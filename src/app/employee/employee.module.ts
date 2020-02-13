import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { EmployeeFormContainer } from './employee-form-container/employee-form-container';
import { EmployeeListContainer } from './employee-list-container/employee-list-container';
import {
  EmployeeListPresentation
} from './employee-list-container/employee-list-presentation/employee-list-presentation';
import {
  EmployeeFormPresentation
} from './employee-form-container/employee-form-presentation/employee-form-presentation';
import { SharedModule } from '../shared/shared.module';
import { EmployeeService } from './employee.service';

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
