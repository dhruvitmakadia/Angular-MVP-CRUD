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
  public departments$: Observable<Array<string>>;
  public employee$: Observable<Employee>;
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

  addEmployee(event) {
    this.api.addEmployee(event);
  }

  updateEmployee(event) {
    this.api.updateEmployee(this.id, event);
  }
}
