import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewappointmentdialogComponent } from './newappointmentdialog.component';

describe('NewappointmentdialogComponent', () => {
  let component: NewappointmentdialogComponent;
  let fixture: ComponentFixture<NewappointmentdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewappointmentdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewappointmentdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
