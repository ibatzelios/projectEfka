import { NgModule } from '@angular/core';
import { DoctorhomepageComponent } from './doctorhomepage.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DoctornavbarModule } from 'src/app/navbars/doctornavbar/doctornavbar.module';




@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NgbModule,
		DoctornavbarModule,
		ModalModule.forRoot(),
		BsDatepickerModule.forRoot(),
		TimepickerModule.forRoot(),
		RouterModule.forChild([{
			path: '',
			component: DoctorhomepageComponent
		}])
	],
	declarations: [
		DoctorhomepageComponent
	]
})

export class DoctorhomepageModule { }
