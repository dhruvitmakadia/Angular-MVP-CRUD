import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.html',
  styles: []
})
export class EmployeeListContainerComponent implements OnInit {

  // Store employee data
  employees$: Observable<Employee>;

  constructor(
    private api: EmployeeService
  ) { }

  ngOnInit() {
    this.employees$ = this.api.getEmployees();
  }

  deleteEmployee(event) {
    this.api.deleteEmployee(event);
    this.employees$ = this.api.getEmployees();
  }

  search(event) {
    this.employees$ = this.api.searchEmployees(event);
  }

  sort(event) {
    this.employees$ = this.api.sortEmployees(event);
  }
}
