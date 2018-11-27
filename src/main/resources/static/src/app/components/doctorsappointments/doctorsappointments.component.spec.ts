import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsappointmentsComponent } from './doctorsappointments.component';

describe('DoctorsappointmentsComponent', () => {
  let component: DoctorsappointmentsComponent;
  let fixture: ComponentFixture<DoctorsappointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsappointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
