import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService, } from 'ngx-bootstrap';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { dateAdjustment } from '../../../helperFunctions/dateAdjustment';
import { timeAdjustment } from '../../../helperFunctions/timeAdjustment';


@Component({
  selector: 'app-editappointments',
  templateUrl: './editappointments.component.html',
  styleUrls: ['./editappointments.component.css']
})
export class EditappointmentsComponent implements OnInit {
  modalRef: BsModalRef;
  datePickerConfig: Partial<BsDatepickerConfig>;
  selectedAppointment: any;
  docSpecialty: any;
  appointments: any;
  docSpecialtys: any;
  docName: any;
  currAppointments: any;
  staticAppointments: any;

  constructor(private userService: UserService, private modalService: BsModalService) { }
  openModal(template: TemplateRef<any>, appointment: any) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    this.selectedAppointment = appointment;
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
  deleteAppointment(app) {
    this.userService.deleteAppointment(app.id).subscribe((data) => {
      this.appointments.splice(this.appointments.indexOf(app), 1);
    });
  }
  updateAppointment(updateForm: NgForm) {
    console.log(this.selectedAppointment);
    this.userService.updateAppointment(this.selectedAppointment).subscribe((data) => {
      let updatedDate = dateAdjustment(this.selectedAppointment.appointmentDate);
      let updatedTime = timeAdjustment(this.selectedAppointment.appointmentTime);

      for (let i = 0; i < this.appointments.length; i++) {
        if (this.selectedAppointment.id == this.appointments[i].id) {
          this.appointments[i].appointmentDate = updatedDate;
          this.appointments[i].appointmentTime = updatedTime;
        }
      }
    }, error => {
      this.appointments = this.staticAppointments;
      this.staticAppointments = JSON.parse(JSON.stringify(this.appointments));
    });


  }

  ngOnInit() {
    this.userService.getAllAppointments().subscribe((data) => {
      console.log(data);
      this.appointments = data;
      this.staticAppointments = JSON.parse(JSON.stringify(this.appointments));
    });
  }

}
