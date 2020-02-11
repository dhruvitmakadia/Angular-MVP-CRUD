import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { Employee } from '../../employee.model';
import { EmployeeFormPresenterService } from '../employee-form-presenter/employee-form-presenter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form-presentation-ui',
  templateUrl: './employee-form-presentation.html',
  styleUrls: ['./employee-form-presentation.scss']
})
export class EmployeeFormPresentationComponent implements OnInit, OnChanges, OnDestroy {

  // get department data from container component
  @Input() departments: Array<string>;
  // get employee data from container component
  @Input() employee: Employee;
  // send data to container component for add
  @Output() add = new EventEmitter<Employee>();
  // send data to container component for update
  @Output() update = new EventEmitter<Employee>();

  constructor(
    private router: Router,
    private presenter: EmployeeFormPresenterService
  ) { }

  // Initiate employee form group
  employeeForm = this.presenter.employeeForm;

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.employee) {
      for (let i = 1; i < this.employee.addresses.length; i++) {
        this.addAddress();
      }
      this.employeeForm.patchValue(this.employee);
    }
  }

  get ef() { return this.employeeForm.controls; }


  /**
   * To add more address to form
   */
  addAddress() {
    this.presenter.addAddress();
  }

  /**
   * To remove address from form
   * @param i index of address contrrol to remove
   */
  removeAddress(i: number) {
    this.presenter.removeAddress(i);
  }

  /**
   * To emit submit event to container and reset form
   */
  onSubmit() {
    if (this.employee) {
      this.update.emit(this.employeeForm.value);
      this.presenter.resetForm(this.employee);
      this.router.navigate(['employee/list']);
    } else {
      this.add.emit(this.employeeForm.value);
      this.presenter.resetForm(this.employee);
      this.router.navigate(['employee/list']);
    }
  }

  ngOnDestroy() {
    this.presenter.resetForm(this.employee);
  }
}
