import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsdetailsComponent } from './patientsdetails.component';

describe('PatientsdetailsComponent', () => {
  let component: PatientsdetailsComponent;
  let fixture: ComponentFixture<PatientsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
