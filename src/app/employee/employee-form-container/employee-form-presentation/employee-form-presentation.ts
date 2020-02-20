import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Employee } from '../../employee.model';
import { EmployeeFormPresenter } from '../employee-form-presenter/employee-form-presenter';

@Component({
  selector: 'app-employee-form-presentation-ui',
  templateUrl: './employee-form-presentation.html',
  styleUrls: ['./employee-form-presentation.scss'],
  providers: [EmployeeFormPresenter]
})
export class EmployeeFormPresentation implements OnInit {

  // get department data from container component
  @Input() departments: Array<string>;
  // get employee data from container component

  @Input() set employee(value: Employee) {
    if (value) {
      this.employeeData = value;
      for (let i = 1; i < this.employee.addresses.length; i++) {
        this.addAddress();
      }
      this.employeeForm.patchValue(this.employee);
    }
  }
  get employee() {
    return this.employeeData;
  }

  // send data to container component for add
  @Output() add: EventEmitter<Employee>;
  // send data to container component for update
  @Output() update: EventEmitter<Employee>;

  // Store employee form group
  public employeeForm: FormGroup;
  public addressForm: FormGroup;
  // temprory variable for getter setter
  private employeeData: Employee;
  // Check form is submitted of not
  submitted: boolean;

  constructor(
    private employeeFormPresenter: EmployeeFormPresenter,
    private snackbar: MatSnackBar
  ) {
    this.add = new EventEmitter<Employee>();
    this.update = new EventEmitter<Employee>();
    this.employeeForm = this.employeeFormPresenter.formBuild();
    this.submitted = false;
  }

  ngOnInit() {
  }

  // Instance of form group
  get ef() { return this.employeeForm.controls; }
  // Instance of address form array
  get af(): FormArray { return this.employeeForm.get('addresses') as FormArray; }
  /**
   * To add more address to form
   */
  public addAddress(): void {
    this.employeeFormPresenter.addAddress(this.employeeForm);
  }

  /**
   * To remove address from form
   * @param index index of address contrrol to remove
   */
  public removeAddress(index: number): void {
    this.employeeFormPresenter.removeAddress(index, this.employeeForm);
  }

  /**
   * To emit submit event to container and reset form
   */
  public onSubmit(): void {
    this.submitted = true;
    if (this.employeeForm.valid) {
      if (this.employee) {
        this.update.emit(this.employeeForm.value);
      } else {
        this.add.emit(this.employeeForm.value);
      }
    } else {
      this.snackbar.open('Please Fill Valid Data....', 'Ok', { duration: 2000 });
    }
  }
}
