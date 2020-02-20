import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()

export class EmployeeFormPresenter {

  constructor(
    private fb: FormBuilder
  ) { }

  // Initiate employee form
  public formBuild(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      addresses: this.fb.array([
        this.initAddress(),
      ]),
      gender: ['', Validators.required],
      department: ['', Validators.required],
      hireDate: ['', Validators.required],
      permanentEmployee: [false]
    });
  }

  /**
   * Initiate address form group
   */
  public initAddress(): FormGroup {
    return this.fb.group({
      street: ['', Validators.required],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      postcode: ['', [Validators.required, Validators.pattern('[0-9]*')]]
    });
  }

  /**
   * get grom group and add new address
   * @param form formgroup of current form
   */
  public addAddress(form: FormGroup): void {
    const control = form.controls.addresses as FormArray;
    control.push(this.initAddress());
  }

  /**
   * get form group and remove address from form
   * @param index index of address contrrol to remove
   * @param form formgroup of current form
   */
  public removeAddress(index: number, form: FormGroup): void {
    const control = form.controls.addresses as FormArray;
    control.removeAt(index);
  }
}
