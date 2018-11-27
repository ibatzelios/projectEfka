import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchappointmentsComponent } from './searchappointments.component';

describe('SearchappointmentsComponent', () => {
  let component: SearchappointmentsComponent;
  let fixture: ComponentFixture<SearchappointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchappointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
