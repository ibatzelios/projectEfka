import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { DoctorService } from '../../services/doctor.service';
import { dateAdjustment } from 'src/app/helperFunctions/dateAdjustment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctorhomepage',
  templateUrl: './doctorhomepage.component.html',
  styleUrls: ['./doctorhomepage.component.css']
})
export class DoctorhomepageComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  

  constructor(private router: Router,private doctorservice: DoctorService) {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-blue',
      showWeekNumbers: false,
      minDate: new Date()
    });
  }
  searchAppointment(searchAppointmentForm) {
    var dateFrom = dateAdjustment(searchAppointmentForm.value.appointmentDate[0]);
    var dateTo = dateAdjustment(searchAppointmentForm.value.appointmentDate[1]);
    console.log(searchAppointmentForm.value.illnessType + dateFrom + dateTo);
    this.router.navigate(['/doctorhomepage/searchappointments', dateFrom, dateTo, searchAppointmentForm.value.illnessType]);
  }
  
  ngOnInit() {
  }

}
