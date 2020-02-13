import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.html',
})
export class EmployeeFormContainer implements OnInit {

  // To store departments data
  public departments$: Observable<Array<string>>;
  // To store employee data for edit
  public employee$: Observable<Employee>;
  // To store id from route
  private id: string;

  constructor(
    private api: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.departments$ = this.api.getDepartments();
    if (this.route.snapshot.paramMap.get('id')) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.employee$ = this.api.getEmployee(this.id);
    }
  }

  /**
   * get data and add new record
   * @param employee data to add new record
   */
  public addEmployee(employee: Employee): void {
    if (this.api.addEmployee(employee).subscribe()) {
      this.snackbar.open('New Record Added Successfully...', 'Ok', { duration: 2000 });
      this.router.navigate(['employee/list']);
    } else {
      this.snackbar.open('Something Went Wrong Please Try Again...', 'Ok', { duration: 2000 });
    }
  }

  /**
   * get data and update that record
   * @param employee data to update record
   */
  public updateEmployee(employee: Employee): void {
    if (this.api.updateEmployee(this.id, employee).subscribe()) {
      this.snackbar.open('Record Updated Successfully...', 'Ok', { duration: 2000 });
      this.router.navigate(['employee/list']);
    } else {
      this.snackbar.open('Something Went Wrong Please Try Again...', 'Ok', { duration: 2000 });
    }
  }
}
