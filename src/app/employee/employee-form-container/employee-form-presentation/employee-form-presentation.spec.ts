import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormPresentationComponent } from './employee-form-presentation';

describe('EmployeeFormPresentationComponent', () => {
  let component: EmployeeFormPresentationComponent;
  let fixture: ComponentFixture<EmployeeFormPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeFormPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
