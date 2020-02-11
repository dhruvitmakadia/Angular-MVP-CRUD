import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormContainerComponent } from './employee-form-container';

describe('EmployeeFormContainerComponent', () => {
  let component: EmployeeFormContainerComponent;
  let fixture: ComponentFixture<EmployeeFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
