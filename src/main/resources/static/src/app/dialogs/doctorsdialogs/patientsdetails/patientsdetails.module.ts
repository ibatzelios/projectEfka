import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsdetailsComponent } from './patientsdetails.component';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [PatientsdetailsComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  entryComponents: [PatientsdetailsComponent]
})
export class PatientsdetailsModule { }
