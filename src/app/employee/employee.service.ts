import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable()

export class EmployeeService {

  // API URL for employee data
  private API_EMPLOYEE: string;
  // API URL for department data
  private API_DEPARTMENT: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.API_EMPLOYEE = `${environment.BASE_URL}/employee`;
    this.API_DEPARTMENT = `${environment.BASE_URL}/department`;
  }

  /**
   * get all employees data
   * @param query search string
   * @param key field name to sort
   * @param order asc/desc order type
   */
  public getEmployees(query: string, key: string, order: string): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.API_EMPLOYEE}?q=${query}&_sort=${key}&_order=${order}`);
  }

  /**
   * get employee id and return data of that id
   * @param id employee id for getting single record
   */
  public getEmployee(id: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.API_EMPLOYEE}/${id}`);
  }

  /**
   * get employee data and add new record to database
   * @param employee employee data for insert operartion
   */
  public addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.API_EMPLOYEE}`, employee);
  }

  /**
   * get employee data and id for update particular record in database
   * @param id employee id for update operation
   * @param employee emploee data for update operation
   */
  public updateEmployee(id: string, employee: Employee): Observable<Employee> {
    return this.httpClient.patch<Employee>(`${this.API_EMPLOYEE}/${id}`, employee);
  }

  /**
   * get employee id and delete record from database
   * @param id employee id for delete operation
   */
  public deleteEmployee(id: number): Observable<Employee> {
    return this.httpClient.delete<Employee>(`${this.API_EMPLOYEE}/${id}`);
  }

  /**
   * To get all department data
   */
  public getDepartments(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(this.API_DEPARTMENT);
  }
}
