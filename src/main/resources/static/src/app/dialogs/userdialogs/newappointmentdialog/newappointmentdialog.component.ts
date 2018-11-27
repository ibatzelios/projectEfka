import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { NgForm } from '@angular/forms';
import { timeAdjustment } from 'src/app/helperFunctions/timeAdjustment';
import { dateAdjustment } from 'src/app/helperFunctions/dateAdjustment';
import { appointment } from 'src/app/models/appointment';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-newappointmentdialog',
  templateUrl: './newappointmentdialog.component.html',
  styleUrls: ['./newappointmentdialog.component.css']
})
export class NewappointmentdialogComponent implements OnInit {
  loading = false;
  datePickerConfig: Partial<BsDatepickerConfig>;


  docSpecialty: any;
  docName: any;
  selectedSpe: any;
  doctorId: any;


  appointment: any;
  constructor(public dialogRef: MatDialogRef<any>, private userService: UserService) {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-blue',
      showWeekNumbers: false,
      minDate: new Date()
    });
  }
  setDoctorsSpecialtys() {
    this.userService.getDoctorsSpecialtys().subscribe((data) => {
      this.docSpecialty = data;

    });
  }
  selectedDoctorSpecialty(event: any) {
    var selectedSpe = event.target.value;
    var id;
    for (let i = 0; i < this.docSpecialty.length; i++) {
      if (selectedSpe == this.docSpecialty[i].name) {
        id = this.docSpecialty[i].id;
      }
    }
    this.userService.getDoctorsNames(id).subscribe((data) => {
      this.docName = data;
    });
  }

  newAppointment(appointmentForm: NgForm) {
    this.loading = true;
    var docid;
    for (let i = 0; i < this.docName.length; i++) {
      if (appointmentForm.value.doctorName == this.docName[i].lastName) {
        docid = this.docName[i].id;
        console.log(docid);
      }
    }

    var finalTime = timeAdjustment(appointmentForm.value.appointmentTime);
    var finalDate = dateAdjustment(appointmentForm.value.appointmentDate);
    console.log(finalTime);
    console.log(finalDate);

    let newAppointment: appointment = {
      doctorId: docid,
      date: finalDate,
      time: finalTime,
      illness: appointmentForm.value.description,
      comments: appointmentForm.value.remarks
    };
    console.log(newAppointment);
    this.userService.setNewAppointment(newAppointment).subscribe(res => {
      this.dialogRef.close('Appointment Added Successfully !!!');
      this.loading = false;
    }, error => {
      this.dialogRef.close('Something went wrong !!!');
      this.loading = false;
    });
    //appointmentForm.reset();
  }
  ngOnInit() {
    this.userService.getDoctorsSpecialtys().subscribe((data) => {
      this.docSpecialty = data;

    });
  }

}
