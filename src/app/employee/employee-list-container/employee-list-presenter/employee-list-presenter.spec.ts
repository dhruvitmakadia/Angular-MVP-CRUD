import { TestBed } from '@angular/core/testing';

import { EmployeeListPresenterService } from './employee-list-presenter';

describe('EmployeeListPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeListPresenterService = TestBed.get(EmployeeListPresenterService);
    expect(service).toBeTruthy();
  });
});
