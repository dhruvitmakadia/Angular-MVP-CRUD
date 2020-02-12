import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeFormContainerComponent } from './employee-form-container/employee-form-container';
import { EmployeeListContainerComponent } from './employee-list-container/employee-list-container';

import {
  EmployeeListPresentationComponent
} from './employee-list-container/employee-list-presentation/employee-list-presentation';

import {
  EmployeeFormPresentationComponent
} from './employee-form-container/employee-form-presentation/employee-form-presentation';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EmployeeService } from './employee.service';


@NgModule({
  declarations: [
    EmployeeFormContainerComponent,
    EmployeeListContainerComponent,
    EmployeeListPresentationComponent,
    EmployeeFormPresentationComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    EmployeeService
  ]
})
export class EmployeeModule { }
