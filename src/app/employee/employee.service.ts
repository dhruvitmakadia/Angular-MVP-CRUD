import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable()

export class EmployeeService {

  // API URL for employee data
  API_EMPLOYEE = `${environment.BASE_URL}/employee`;
  // API URL for department data
  API_DEPARTMENT = `${environment.BASE_URL}/department`;

  constructor(private httpClient: HttpClient) { }

  /**
   * To get all employee data
   */
  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.API_EMPLOYEE);
  }

  /**
   * get employee id and return data of that id
   * @param id employee id for getting single record
   */
  getEmployee(id: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.API_EMPLOYEE}/${id}`);
  }

  /**
   * get employee data and add new record to database
   * @param employee employee data for insert operartion
   */
  addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.API_EMPLOYEE}`, employee);
  }

  /**
   * get employee data and id for update particular record in database
   * @param id employee id for update operation
   * @param employee emploee data for update operation
   */
  updateEmployee(id: string, employee: Employee): Observable<Employee> {
    return this.httpClient.patch<Employee>(`${this.API_EMPLOYEE}/${id}`, employee);
  }

  /**
   * get employee id and delete record from database
   * @param id employee id for delete operation
   */
  deleteEmployee(id: number): Observable<Employee> {
    return this.httpClient.delete<Employee>(`${this.API_EMPLOYEE}/${id}`);
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
  searchEmployees(query: string): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.API_EMPLOYEE}?q=${query}`);
  }

  /**
   * Get field and order type and return sorted data
   * @param key field name to sort
   * @param order order type asc/desc
   */
  sortEmployees(key: string, order: string): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.API_EMPLOYEE}?_sort=${key}&_order=${order}`);
  }
}
