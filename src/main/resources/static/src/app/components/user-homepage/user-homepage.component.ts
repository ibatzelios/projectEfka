import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, } from 'ngx-bootstrap';
import { NgForm } from '@angular/forms';
import { appointment } from '../../models/appointment';
import { searchAppointmentModel } from '../../models/searchAppointmentModel';
import { doctorModel } from '../../models/doctorModel';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { UserService } from 'src/app/services/user.service';

interface DocSpecialty {
  name: String;
}

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


  modalRef: BsModalRef;
  appointment: any;
  searchAppointmentModel: searchAppointmentModel[] = [];

  constructor(private router: Router, private modalService: BsModalService, private userServise: UserService) {
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
    this.userServise.getDoctorsSpecialtys().subscribe((data) => {
      console.log(data);
      this.docSpecialty = data;

    });
  }
  // We may need to have 2 variables, one for all doctors specialts and one for the selected
  selectedDoctorSpecialty(event: any) {
    var selectedSpe = event.target.value;
    var id;
    for (let i = 0; i < this.docSpecialty.length; i++) {
      console.log(this.docSpecialty[i].specialty);
      if (selectedSpe == this.docSpecialty[i].specialty) {
        id = this.docSpecialty[i].id;
      }
    }
    this.userServise.getDoctorsNames(id).subscribe((data) => {
      console.log(data);
      this.docName = data;
    });
    console.log(this.docSpecialty);
  }

  newAppointment(appointmentForm: NgForm) {
    let newAppointment: appointment = {
      doctorSpecialty: appointmentForm.value.doctorSpecialty,
      doctorName: appointmentForm.value.doctorName,
      appointmentDate: appointmentForm.value.appointmentDate.toDateString(),
      appointmentTime: appointmentForm.value.appointmentTime.toTimeString(),
      description: appointmentForm.value.description,
      other: appointmentForm.value.remarks
    };
    this.userServise.setNewAppointment(newAppointment).subscribe(res => {
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
      appointmentDateFrom: searchForm.value.appointmentDate[0],
      appointmentDateTo: searchForm.value.appointmentDate[1]
    };
    console.log(searchAppointments);

    this.userServise.getFilteredAppointments(searchAppointments.doctorSpecialty,
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

