import { NgModule } from '@angular/core';
import { DoctorsappointmentsComponent } from './doctorsappointments.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
	imports: [
		CommonModule,
		NgbModule,
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