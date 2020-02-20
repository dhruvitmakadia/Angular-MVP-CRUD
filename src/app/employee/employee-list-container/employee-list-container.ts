import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Employee, Order } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.html'
})
export class EmployeeListContainer implements OnInit {

  // To store employees detail
  public employees$: Observable<Employee[]>;
  // To store sort order type
  public orderAs: string;
  // To store field name
  public fieldName: string;
  // To store search string
  public searchString: string;

  constructor(
    private api: EmployeeService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getEmployees();
  }

  /**
   * To get Employees Detail
   */
  private getEmployees(): void {
    this.employees$ = this.api.getEmployees(this.searchString, this.fieldName, this.orderAs);
  }

  /**
   * get employee id and delete record
   * @param id employee id to delete
   */
  public deleteEmployee(id: number): void {
    this.api.deleteEmployee(id).subscribe(data => {
      if (data) {
        this.snackbar.open('Recored Deleted Successfully...', 'Ok', { duration: 2000 });
        this.employees$ = this.api.getEmployees(this.searchString, this.fieldName, this.orderAs);
      } else {
        this.snackbar.open('Something Went Wrong Please Try Again...', 'Ok', { duration: 2000 });
      }
    });
  }

  /**
   * get search string and get searched data
   * @param query search string
   */
  public search(query: string): void {
    this.searchString = query;
    this.getEmployees();
  }

  /**
   * get field name and sort data
   * @param value object of sort field and asc/desc type
   */
  public sort(value: Order): void {
    this.fieldName = value.key;
    this.orderAs = value.order;
    this.getEmployees();
  }
}
