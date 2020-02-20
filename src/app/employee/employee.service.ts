import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Employee } from './employee.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

// API URL for employee data
const API_EMPLOYEE = `${environment.BASE_URL}/employee`;
// API URL for department data
const API_DEPARTMENT = `${environment.BASE_URL}/department`;

@Injectable()

export class EmployeeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * get all employees data
   * @param query search string
   * @param key field name to sort
   * @param order asc/desc order type
   */
  public getEmployees(query: string, key: string, order: string): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${API_EMPLOYEE}?q=${query}&_sort=${key}&_order=${order}`);
  }

  /**
   * get employee id and return data of that id
   * @param id employee id for getting single record
   */
  public getEmployee(id: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`${API_EMPLOYEE}/${id}`);
  }

  /**
   * get employee data and add new record to database
   * @param employee employee data for insert operartion
   */
  public addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${API_EMPLOYEE}`, employee);
  }

  /**
   * get employee data and id for update particular record in database
   * @param id employee id for update operation
   * @param employee emploee data for update operation
   */
  public updateEmployee(id: string, employee: Employee): Observable<Employee> {
    return this.httpClient.patch<Employee>(`${API_EMPLOYEE}/${id}`, employee);
  }

  /**
   * get employee id and delete record from database
   * @param id employee id for delete operation
   */
  public deleteEmployee(id: number): Observable<Employee> {
    return this.httpClient.delete<Employee>(`${API_EMPLOYEE}/${id}`);
  }

  /**
   * To get all department data
   */
  public getDepartments(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(API_DEPARTMENT);
  }
}
