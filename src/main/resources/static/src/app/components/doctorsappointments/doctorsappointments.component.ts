import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctorsappointments',
  templateUrl: './doctorsappointments.component.html',
  styleUrls: ['./doctorsappointments.component.css']
})
export class DoctorsappointmentsComponent implements OnInit {
  sub: any;
  text: String;
  dateFrom: String;
  dateTo: String;
  constructor(private doctorservice: DoctorService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.text = params['text']; 
      this.dateFrom = params['datefrom'];
      this.dateTo = params['dateto'];
   });
   console.log(this.text,  this.dateFrom,  this.dateTo);
    this.doctorservice.getFilteredAppointments(this.text, this.dateFrom, this.dateTo).subscribe((data) => {

    });
  }

}
