import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { timeToJSON } from 'src/app/helperFunctions/timeToJSON';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { dateAdjustment } from 'src/app/helperFunctions/dateAdjustment';
import { timeAdjustment } from 'src/app/helperFunctions/timeAdjustment';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  selectedAppointment: any;
  time: any;
  docSpecialty: any;
  docName: any;
  appointments: any;
  staticAppointments: any;
  instaclose: boolean;

  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService) {
    dialogRef.disableClose = true;
    this.instaclose = true;
    this.selectedAppointment = data;
    console.log(this.selectedAppointment);
    this.selectedAppointment.date = new Date(this.selectedAppointment.date);
    this.time = timeToJSON(this.selectedAppointment.time);
    this.selectedAppointment.time = this.time;

    this.userService.getDoctorsSpecialtys().subscribe((data) => {
      this.docSpecialty = data;
    });
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-blue',
      showWeekNumbers: false,
      minDate: new Date()
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
  updateAppointment(updateForm: NgForm) {
    this.instaclose = false;
    console.log(this.selectedAppointment.date instanceof Date);
    if (!(this.selectedAppointment.date instanceof Date)) {
      this.selectedAppointment.date = dateAdjustment(this.selectedAppointment.date);
    }
    if (this.selectedAppointment.time instanceof Object) {
      this.selectedAppointment.time = timeAdjustment(this.selectedAppointment.time);
    }
    if (this.docName != undefined) {
      let id;
      for (let i = 0; i < this.docName.length; i++) {
        if (this.selectedAppointment.doctor.lastName == this.docName[i].lastName) {
          id = this.docName[i].id;
        }
      }
      this.selectedAppointment.doctor.id = id;
    }
    console.log(this.selectedAppointment);
    this.userService.updateAppointment(this.selectedAppointment).subscribe((data) => {
      console.log('update dataaaaaaa', data);
      let updatedDate = dateAdjustment(this.selectedAppointment.date);
      // let updatedTime = timeAdjustment(this.selectedAppointment.time);

      for (let i = 0; i < this.appointments.length; i++) {
        if (this.selectedAppointment.id == this.appointments[i].id) {
          this.appointments[i].date = updatedDate;
          // this.appointments[i].time = updatedTime;
        }
      }
      let instaclose = this.instaclose;
      let appointments = this.appointments;
      this.dialogRef.close({ instaclose, appointments });
    }, error => {
      this.appointments = this.staticAppointments;
      this.staticAppointments = JSON.parse(JSON.stringify(this.appointments));
      let instaclose = this.instaclose;
      let appointments = this.appointments;
      this.dialogRef.close({ instaclose, appointments });

    });

  }
  dialogClose() {
    let instaclose = this.instaclose;
    let appointments = this.appointments;
    this.dialogRef.close({ instaclose, appointments });
  }
  ngOnInit() {
    this.userService.getAllAppointments().subscribe((data) => {
      this.appointments = data;
      this.staticAppointments = JSON.parse(JSON.stringify(this.appointments));
    });
  }

}
