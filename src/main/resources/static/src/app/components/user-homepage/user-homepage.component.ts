import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, } from 'ngx-bootstrap';
import { NgForm } from '@angular/forms';
import { appointment } from '../../models/appointment';
import { searchAppointmentModel } from '../../models/searchAppointmentModel';
import { doctorModel } from '../../models/doctorModel';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { UserService } from 'src/app/services/user.service';

// interface DocSpecialty {
//   name: String;
// }

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {
  mytime: Date;
  datePickerConfig: Partial<BsDatepickerConfig>;


  docSpecialty: any;
  docName: any;
  selectedSpe: any;
  doctorId: any;

  modalRef: BsModalRef;
  appointment: any;
  searchAppointmentModel: searchAppointmentModel[] = [];

  constructor(private router: Router, private modalService: BsModalService, private userService: UserService) {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-blue',
      showWeekNumbers: false,
      minDate: new Date()
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }
  // Need testing and be added in the new appointment button && to the search appointment button
  setDoctorsSpecialtys() {
    this.userService.getDoctorsSpecialtys().subscribe((data) => {
      this.docSpecialty = data;

    });
  }
  selectedDoctorSpecialty(event: any) {
    var selectedSpe = event.target.value;
    var id;
    for (let i = 0; i < this.docSpecialty.length; i++) {
      if (selectedSpe == this.docSpecialty[i].specialty) {
        id = this.docSpecialty[i].id;
      }
    }
    this.userService.getDoctorsNames(id).subscribe((data) => {
      this.docName = data;
    });
  }

  newAppointment(appointmentForm: NgForm) {
    var id;
    for (let i = 0; i < this.docName.length; i++) {
      if (appointmentForm.value.doctorName == this.docName[i].lastName) {
        id = this.docName[i].id;
      }
    }
    console.log('This is the doctors id !!!!!!!!!!!!!!');
    console.log(id);
    let newAppointment: appointment = {
      doctorId: id,
      date: appointmentForm.value.appointmentDate,
      time: appointmentForm.value.appointmentTime,
      illness: appointmentForm.value.description,
      comments: appointmentForm.value.remarks
    };
    this.userService.setNewAppointment(newAppointment).subscribe(res => {
      console.log(res);
    });
    console.log(newAppointment);
    appointmentForm.reset();
    this.modalRef.hide();
  }
  searchAppointment(searchForm) {
    this.appointment = [
      {
        doctorSpecialty: 'odontiatros', doctorName: 'papadopoulos', appointmentDate: '22/01/2018', appointmentTime: '12:00',
        description: 'Mou ponaei o laimos edw kai pente meres den kserw ti na kanw',
        other: 'Mou ponaei o laimos edw kai pente meres den kserw ti na kanw'
      },
      {
        doctorSpecialty: 'paidiatros', doctorName: 'premtsis', appointmentDate: '04/03/2018', appointmentTime: '15:00',
        description: 'axxxxxxxxxxx', other: 'den mporwwwwww'
      },
      {
        doctorSpecialty: 'kardiologos', doctorName: 'sarantidis', appointmentDate: '12/11/2018', appointmentTime: '17:00',
        description: 'baxxxxxxxxx', other: 'tirthe to teloss'
      },

    ];
    let searchAppointments: searchAppointmentModel = {
      doctorSpecialty: searchForm.value.doctorSpecialty,
      appointmentDateFrom: searchForm.value.appointmentDate[0].toDateString(),
      appointmentDateTo: searchForm.value.appointmentDate[1].toDateString()
    };
    console.log(searchAppointments);

    this.userService.getFilteredAppointments(searchAppointments.doctorSpecialty,
      searchAppointments.appointmentDateFrom, searchAppointments.appointmentDateTo)
      .subscribe(data => {
        console.log(data);
        this.appointment = data;
      });

  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }

  ngOnInit() { }
}

