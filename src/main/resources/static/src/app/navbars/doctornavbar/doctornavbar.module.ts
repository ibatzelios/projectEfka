import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctornavbarComponent } from './doctornavbar.component';

@NgModule({
  declarations: [DoctornavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DoctornavbarComponent
]
})
export class DoctornavbarModule { }
