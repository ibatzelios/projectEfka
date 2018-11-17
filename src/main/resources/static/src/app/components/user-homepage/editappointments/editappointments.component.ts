import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService, } from 'ngx-bootstrap';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { appointment } from 'src/app/models/appointment';

interface DocSpecialty {
  name: String;
}

@Component({
  selector: 'app-editappointments',
  templateUrl: './editappointments.component.html',
  styleUrls: ['./editappointments.component.css']
})
export class EditappointmentsComponent implements OnInit {
  modalRef: BsModalRef;
  datePickerConfig: Partial<BsDatepickerConfig>;
  selectedAppointment: any;
  docSpecialty: DocSpecialty[] = [
    { name: 'Odontiatros' },
    { name: 'Paidiatros' },
    { name: 'Orthopaidikos' },
    { name: 'Kardiologos' },
  ];
  // need to put it in *ngFor when backend is ready
  appointments: any;
  docSpecialtys: any;
  testAppointments = [
    {
      id: '1', doctorSpecialty: 'Odontiatros', doctorName: 'papadopoulos', appointmentDate: '22/01/2018', appointmentTime: '12:00',
      description: 'Mou ponaei o laimos edw kai pente meres den kserw ti na kanw',
      other: 'Mou ponaei o laimos edw kai pente meres den kserw ti na kanw'
    },
    {
      id: '2', doctorSpecialty: 'Paidiatros', doctorName: 'premtsis', appointmentDate: '04/03/2018', appointmentTime: '15:00',
      description: 'axxxxxxxxxxx', other: 'den mporwwwwww'
    },
    {
      id: '3', doctorSpecialty: 'Kardiologos', doctorName: 'sarantidis', appointmentDate: '12/11/2018', appointmentTime: '17:00',
      description: 'baxxxxxxxxx', other: 'tirthe to teloss'
    },

  ];
  constructor(private userService: UserService, private modalService: BsModalService) { }
  openModal(template: TemplateRef<any>, appointment: any) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    this.selectedAppointment = appointment;
  }
  deleteAppointment(app) {
    this.userService.deleteAppointment(app.id).subscribe((data) => {
      console.log('Deleted data' + data);
      this.appointments.slice(this.appointments.indexOf(app), 1);
    });
  }
  updateAppointment(updateForm: NgForm) {
    console.log(updateForm.value);
  }

  ngOnInit() {
    this.userService.getAllAppointments().subscribe((data) => {
      this.appointments = data;
    });
    this.userService.getDoctorsSpecialtys().subscribe((data) => {
      this.docSpecialtys = data;
    });
  }

}
