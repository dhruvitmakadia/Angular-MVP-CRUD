import { Injectable } from '@angular/core';

@Injectable()

export class EmployeeListPresenter {

  constructor() { }

  /**
   * get previous sorting order and change it
   * @param order previous sorting order
   */
  public order(order: string): string {
    if (order === 'asc') {
      return 'desc';
    } else {
      return 'asc';
    }
  }
}
