import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditappointmentsComponent } from './editappointments.component';

describe('EditappointmentsComponent', () => {
  let component: EditappointmentsComponent;
  let fixture: ComponentFixture<EditappointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditappointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
