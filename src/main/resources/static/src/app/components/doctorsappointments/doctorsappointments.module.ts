import { NgModule } from '@angular/core';
import { DoctorsappointmentsComponent } from './doctorsappointments.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PatientsdetailsModule } from 'src/app/dialogs/doctorsdialogs/patientsdetails/patientsdetails.module';
import { AppointmentdetailsModule } from 'src/app/dialogs/doctorsdialogs/appointmentdetails/appointmentdetails.module';
import { DoctornavbarModule } from 'src/app/navbars/doctornavbar/doctornavbar.module';




@NgModule({
	imports: [
		CommonModule,
		NgbModule,
		PatientsdetailsModule,
		AppointmentdetailsModule,
		DoctornavbarModule,
		ModalModule.forRoot(),
		RouterModule.forChild([{
			path: '',
			component: DoctorsappointmentsComponent
		}])
	],
	declarations: [
		DoctorsappointmentsComponent
	]
})

export class DoctorsappointmentsModule { }