import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListPresentationComponent } from './employee-list-presentation';

describe('EmployeeListPresentationComponent', () => {
  let component: EmployeeListPresentationComponent;
  let fixture: ComponentFixture<EmployeeListPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
