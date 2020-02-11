import { TestBed } from '@angular/core/testing';

import { EmployeeFormPresenterService } from './employee-form-presenter';

describe('EmployeeFormPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeFormPresenterService = TestBed.get(EmployeeFormPresenterService);
    expect(service).toBeTruthy();
  });
});
