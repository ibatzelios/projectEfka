import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { AppointmentdetailsComponent } from './appointmentdetails.component';

@NgModule({
  declarations: [AppointmentdetailsComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  entryComponents: [AppointmentdetailsComponent]
})
export class AppointmentdetailsModule { }
