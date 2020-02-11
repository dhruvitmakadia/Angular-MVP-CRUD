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

  // To store employees detail
  public employees$: Observable<Employee>;

  constructor(
    private api: EmployeeService
  ) { }

  ngOnInit() {
    this.employees$ = this.api.getEmployees();
  }

  /**
   * get employee id and delete record
   * @param id employee id to delete
   */
  deleteEmployee(id: number) {
    this.api.deleteEmployee(id);
    this.employees$ = this.api.getEmployees();
  }

  /**
   * get search string and get searched data
   * @param query search string
   */
  search(query: string) {
    this.employees$ = this.api.searchEmployees(query);
  }

  /**
   * get field name and sort data
   * @param key field name to sort
   */
  sort(key: string) {
    this.employees$ = this.api.sortEmployees(key);
  }
}
