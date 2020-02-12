import { Injectable } from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from '../../employee.model';

@Injectable()

export class EmployeeFormPresenterService {

  constructor(
    private fb: FormBuilder
  ) { }

  // Initiate employee form
  employeeForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', Validators.required],
    mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    addresses: this.fb.array([
      this.initAddress(),
    ]),
    gender: ['', Validators.required],
    department: ['', Validators.required],
    hireDate: ['', Validators.required],
    permanentEmployee: [false]
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
}
