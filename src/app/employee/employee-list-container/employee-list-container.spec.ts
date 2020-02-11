import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListContainerComponent } from './employee-list-container';

describe('EmployeeListContainerComponent', () => {
  let component: EmployeeListContainerComponent;
  let fixture: ComponentFixture<EmployeeListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
