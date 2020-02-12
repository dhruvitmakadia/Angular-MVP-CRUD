import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../employee.model';
import { EmployeeListPresenterService } from '../employee-list-presenter/employee-list-presenter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list-presentation-ui',
  templateUrl: './employee-list-presentation.html',
  styleUrls: ['./employee-list-presentation.scss'],
  providers: [EmployeeListPresenterService]
})
export class EmployeeListPresentationComponent implements OnInit {

  // To store search query
  public query: string;
  // To store name of field to sort by default name field
  public key = 'name';
  // flag to specify asc/desc
  public reverse = false;

  constructor(
    private router: Router
  ) { }

  // get employee data from container component
  @Input() employees: Employee;
  // send employee id to container component for delete
  @Output() delete = new EventEmitter<number>();
  // send search string to container component for search
  @Output() search = new EventEmitter<string>();
  // send field to container component for sort
  @Output() sort = new EventEmitter<string>();
  // send order to container component for sort
  @Output() order = new EventEmitter<boolean>();

  ngOnInit() {
    this.order.emit(this.reverse);
    this.sort.emit(this.key);
  }

  /**
   * get employee id and emit to container component for delete operation
   * @param id employee id for delete operation
   */
  deleteEmployee(id: number) {
    if (confirm('Are You Sure To Delete This Record?')) {
      this.delete.emit(id);
    }
  }

  /**
   * To navigate to add form
   */
  addEmployee() {
    this.router.navigate([`employee/add`]);
  }

  /**
   * get employee id and navigate to edit form
   * @param id employee id for edit operation
   */
  editEmployee(id: number) {
    this.router.navigate([`employee/edit/${id}`]);
  }

  /**
   * send query string to container
   */
  searchData() {
    this.search.emit(this.query);
  }

  /**
   * take field name and display sort sign according to flag
   * @param key take field name to sort
   */
  sortData(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
    this.order.emit(this.reverse);
    this.sort.emit(key);
  }
}
