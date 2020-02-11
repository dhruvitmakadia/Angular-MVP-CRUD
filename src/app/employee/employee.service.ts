import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // API URL for employee data
  API_EMPLOYEE = `${environment.BASE_URL}/employee`;
  // API URL for department data
  API_DEPARTMENT = `${environment.BASE_URL}/department`;

  constructor(private httpClient: HttpClient) { }

  /**
   * To get all employee data
   */
  getEmployees(): Observable<Employee> {
    return this.httpClient.get<Employee>(this.API_EMPLOYEE);
  }

  /**
   * get employee id and return data of that id
   * @param id employee id for getting single record
   */
  getEmployee(id): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.API_EMPLOYEE}/${id}`);
  }

  /**
   * get employee data and add new record to database
   * @param data employee data for insert operartion
   */
  addEmployee(data) {
    this.httpClient.post(`${this.API_EMPLOYEE}`, data).subscribe();
  }

  /**
   * get employee data and id for update particular record in database
   * @param id employee id for update operation
   * @param data emploee data for update operation
   */
  updateEmployee(id, data) {
    this.httpClient.patch(`${this.API_EMPLOYEE}/${id}`, data).subscribe();
  }

  /**
   * get employee id and delete record from database
   * @param id employee id for delete operation
   */
  deleteEmployee(id) {
    this.httpClient.delete(`${this.API_EMPLOYEE}/${id}`).subscribe();
  }

  /**
   * To get all department data
   */
  getDepartments(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(this.API_DEPARTMENT);
  }

  /**
   * To get search employee data
   * @param query search string
   */
  searchEmployees(query): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.API_EMPLOYEE}?q=${query}`);
  }

  sortEmployees(key) {
    return this.httpClient.get<Employee>(`${this.API_EMPLOYEE}?_sort=${key}&_order=asc`);
  }
}
