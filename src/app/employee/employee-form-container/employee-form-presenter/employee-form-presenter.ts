import { Injectable } from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from '../../employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFormPresenterService {

  constructor(
    private fb: FormBuilder
  ) { }

  // Initiate employee form
  employeeForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', Validators.required],
    mobile: ['', [Validators.required]],
    addresses: this.fb.array([
      this.initAddress(),
    ]),
    gender: ['', Validators.required],
    department: ['', Validators.required],
    hireDate: ['', Validators.required],
    permanentEmployee: [false, Validators.required]
  });

  /**
   * Initiate address form group
   */
  initAddress() {
    return this.fb.group({
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      postcode: ['', [Validators.required]]
    });
  }

  /**
   * To add more address to form
   */
  addAddress() {
    const control = this.employeeForm.controls.addresses as FormArray;
    control.push(this.initAddress());
  }

  /**
   * To remove address from form
   * @param i index of address contrrol to remove
   */
  removeAddress(i: number) {
    const control = this.employeeForm.controls.addresses as FormArray;
    control.removeAt(i);
  }

  /**
   * To reset form and its controls
   * @param employee employee data to reset
   */
  resetForm(employee: Employee) {
    this.employeeForm.reset();
    if (employee) {
      for (let i = employee.addresses.length; i > 1; i--) {
        this.removeAddress(i - 1);
      }
    }
  }
}
