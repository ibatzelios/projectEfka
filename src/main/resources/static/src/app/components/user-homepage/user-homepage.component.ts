import { Component, OnInit, TemplateRef  } from '@angular/core';
import { Router} from '@angular/router';
import { BsModalRef,BsModalService, } from 'ngx-bootstrap';
import { NgForm} from '@angular/forms';
import { Appointment } from '../../models/appointment';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

interface DocSpecialty {
  name: String
}
interface DocName {
  name: String
}
interface Appointments {
  docSpe: string,
  docName: string,
  appDate: string,
  appTime: string,
  des: string,
  other: string
}

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {
 mytime: Date ;
datePickerConfig: Partial<BsDatepickerConfig>;

docSpecialty: DocSpecialty[] = [
    {name: 'Odontiatros'},
    {name: 'Paidiatros'},
    {name: 'Orthopaidikos'},
    {name: 'Kardiologos'},
  ];

  doctorSpecialty: string = '';

  docName: DocName[] = [];

modalRef: BsModalRef;
appointment: Appointment[] = [];
appointments: Appointments[] = [];

  constructor(private router: Router,private modalService: BsModalService) {
  this.datePickerConfig = Object.assign({},{
    containerClass: 'theme-blue', 
    showWeekNumbers: false,
    minDate: new Date()
    });
  }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,{class: 'modal-lg'});
  }

selectedDoctorSpecialty(event:any){
  this.doctorSpecialty = event.target.value;
  this.docName = [
    {name: 'Premtsis'},
    {name: 'Papadopoulos'},
    {name: 'Mpalios'},
    {name: 'Patroklos'},
  ];
  console.log(this.doctorSpecialty);
}

  newAppointment(appointmentForm: NgForm){
    let newAppointment: Appointment= {
      doctorSpecialty: appointmentForm.value.doctorSpecialty,
      doctorName: appointmentForm.value.doctorName,
      appointmentDate: appointmentForm.value.appointmentDate.toDateString(),
      appointmentTime: appointmentForm.value.appointmentTime.toTimeString(),
      description: appointmentForm.value.description,
      other: appointmentForm.value.remarks
    }
    console.log(newAppointment);
    appointmentForm.reset();
    this.modalRef.hide();
  }
  searchAppointment(searchForm){
    this.appointments = [
      {docSpe: 'odontiatros', docName: 'papadopoulos', appDate: '22/01/2018', appTime: '12:00', des: 'Mou ponaei o laimos edw kai pente meres den kserw ti na kanw', other: 'Mou ponaei o laimos edw kai pente meres den kserw ti na kanw'},
      {docSpe: 'paidiatros', docName: 'premtsis', appDate: '04/03/2018', appTime: '15:00', des: 'axxxxxxxxxxx', other: 'den mporwwwwww'},
      {docSpe: 'kardiologos', docName: 'sarantidis', appDate: '12/11/2018', appTime: '17:00', des: 'baxxxxxxxxx', other: 'tirthe to teloss'},
      
    ];
    let searchAppointments: Appointment= {
      doctorSpecialty: searchForm.value.doctorSpecialty,
      appointmentDateFrom: searchForm.value.appointmentDate[0],
      appointmentDateTo: searchForm.value.appointmentDate[1]
    }
    console.log(searchAppointments);
    
  }
  
  logout(){
  	localStorage.clear();
  	this.router.navigate(['/home']);
  }

  ngOnInit() {}
}

