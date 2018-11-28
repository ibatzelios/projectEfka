import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PatientsdetailsComponent } from 'src/app/dialogs/doctorsdialogs/patientsdetails/patientsdetails.component';
import { AppointmentdetailsComponent } from 'src/app/dialogs/doctorsdialogs/appointmentdetails/appointmentdetails.component';

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
  appointments: any;
  constructor(private doctorservice: DoctorService, private route: ActivatedRoute, public dialog: MatDialog) { }

  seePatientsDetails(appointment){
    const dialogRef = this.dialog.open(PatientsdetailsComponent, {
      data: appointment
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  seeAppointmentsDetails(appointment){
    const dialogRef = this.dialog.open(AppointmentdetailsComponent, {
      data: appointment
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.text = params['text']; 
      this.dateFrom = params['datefrom'];
      this.dateTo = params['dateto'];
   });
   console.log(this.text,  this.dateFrom,  this.dateTo);
    this.doctorservice.getFilteredAppointments(this.text, this.dateFrom, this.dateTo).subscribe((data) => {
      console.log(data);
      this.appointments = data;
    });
  }

}
