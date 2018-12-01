import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService, } from 'ngx-bootstrap';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { dateAdjustment } from '../../../helperFunctions/dateAdjustment';
import { timeAdjustment } from '../../../helperFunctions/timeAdjustment';
import { MatDialog } from '@angular/material';
import { DeleteComponent } from 'src/app/dialogs/userdialogs/editappointment/delete/delete.component';
import { timeToJSON } from 'src/app/helperFunctions/timeToJSON';
import { UpdateComponent } from 'src/app/dialogs/userdialogs/editappointment/update/update.component';


@Component({
  selector: 'app-editappointments',
  templateUrl: './editappointments.component.html',
  styleUrls: ['./editappointments.component.css']
})
export class EditappointmentsComponent implements OnInit {
  noResults = false;
  modalRef: BsModalRef;
  datePickerConfig: Partial<BsDatepickerConfig>;
  selectedAppointment: any;
  docSpecialty: any;
  appointments: any;
  docName: any;
  staticAppointments: any;
  time: any;
  constructor(private userService: UserService, private modalService: BsModalService, public dialog: MatDialog) {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-blue',
      showWeekNumbers: false,
      minDate: new Date()
    });
  }
  // openModal(template: TemplateRef<any>, appointment: any) {
  //   this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  //   this.selectedAppointment = appointment;
  //   this.selectedAppointment.date = new Date(this.selectedAppointment.date);
  //   this.time = timeToJSON(this.selectedAppointment.time);
  //   this.selectedAppointment.time = this.time;

  //   this.userService.getDoctorsSpecialtys().subscribe((data) => {
  //     this.docSpecialty = data;
  //   });
  // }
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
  deleteAppointment(app) {
    const dialogRef = this.dialog.open(DeleteComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == 'delete') {
        this.userService.deleteAppointment(app.id).subscribe((data) => {
          this.appointments.splice(this.appointments.indexOf(app), 1);
        });
      } else {
        console.log('canceled');
      }
    });

  }
  updateAppointmentsDialog(appointment) {
    const dialogRef = this.dialog.open(UpdateComponent, {
      height: '900px',
      width: '650px',
      maxWidth: '98%',
      maxHeight: '98%',
      data: appointment
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.instaclose == true) {
        this.appointments = this.staticAppointments;
        this.staticAppointments = JSON.parse(JSON.stringify(this.appointments));
      } else {
        this.userService.getAllAppointments().subscribe((data) => {
          if (Object.keys(data).length === 0) {
            this.noResults = true;
          }
          this.appointments = data;
          this.staticAppointments = JSON.parse(JSON.stringify(this.appointments));
        });
      }

    });
  }
  updateAppointment(updateForm: NgForm) {
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
      this.modalRef.hide();
      let updatedDate = dateAdjustment(this.selectedAppointment.date);
      // let updatedTime = timeAdjustment(this.selectedAppointment.time);

      for (let i = 0; i < this.appointments.length; i++) {
        if (this.selectedAppointment.id == this.appointments[i].id) {
          this.appointments[i].date = updatedDate;
          // this.appointments[i].time = updatedTime;
        }
      }
    }, error => {
      this.appointments = this.staticAppointments;
      this.staticAppointments = JSON.parse(JSON.stringify(this.appointments));
      this.modalRef.hide();

    });

  }

  ngOnInit() {
    this.userService.getAllAppointments().subscribe((data) => {
      if (Object.keys(data).length === 0) {
        this.noResults = true;
      }
      this.appointments = data;
      this.staticAppointments = JSON.parse(JSON.stringify(this.appointments));
    });

  }

}
