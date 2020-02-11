import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee.model';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.html',
  styles: []
})
export class EmployeeFormContainerComponent implements OnInit {

  // To store departments data
  public departments$: Observable<Array<string>>;
  // To store employee data for edit
  public employee$: Observable<Employee>;
  // To store id from route
  private id: string;

  constructor(
    private api: EmployeeService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.departments$ = this.api.getDepartments();
    if (this.router.snapshot.paramMap.get('id')) {
      this.id = this.router.snapshot.paramMap.get('id');
      this.employee$ = this.api.getEmployee(this.id);
    }
  }

  /**
   * get data and add new record
   * @param employee data to add new record
   */
  addEmployee(employee: Employee) {
    this.api.addEmployee(employee);
  }

  /**
   * get data and update that record
   * @param employee data to update record
   */
  updateEmployee(employee: Employee) {
    this.api.updateEmployee(this.id, employee);
  }
}
