import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee, Order } from '../../employee.model';
import { EmployeeListPresenter } from '../employee-list-presenter/employee-list-presenter';

@Component({
  selector: 'app-employee-list-presentation-ui',
  templateUrl: './employee-list-presentation.html',
  styleUrls: ['./employee-list-presentation.scss'],
  providers: [EmployeeListPresenter]
})
export class EmployeeListPresentation implements OnInit {

  // get employee data from container component
  @Input() employees: Employee;
  // send employee id to container component for delete
  @Output() delete: EventEmitter<number>;
  // send search string to container component for search
  @Output() search: EventEmitter<string>;
  // send field to container component for sort
  @Output() sort: EventEmitter<Order>;

  // To store search query
  public query: string;
  // To store name of field to sort by default name field
  public key: string;
  // Order of data
  public orderType: string;
  // ASC/DESC sign flag
  private reverse: boolean;

  constructor(
    private employeeListPresenter: EmployeeListPresenter
  ) {
    this.delete = new EventEmitter<number>();
    this.search = new EventEmitter<string>();
    this.sort = new EventEmitter<Order>();
    this.query = '';
    this.orderType = 'asc';
    this.key = 'name';
    this.reverse = true;
  }

  ngOnInit() {
    this.search.emit(this.query);
    this.sort.emit({ key: this.key, order: this.orderType });
  }

  /**
   * get employee id and emit to container component for delete operation
   * @param id employee id for delete operation
   */
  public deleteEmployee(id: number): void {
    if (confirm('Are You Sure To Delete This Record?')) {
      this.delete.emit(id);
    }
  }

  /**
   * send query string to container
   */
  public searchData(): void {
    this.search.emit(this.query);
  }

  /**
   * take field name and display sort sign according to flag
   * @param key take field name to sort
   */
  public sortData(key: string): void {
    this.reverse = !this.reverse;
    this.key = key;
    this.orderType = this.employeeListPresenter.order(this.orderType);
    this.sort.emit({ key: this.key, order: this.orderType });
  }
}
