import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { NewappointmentdialogComponent } from './newappointmentdialog.component';
import { BsDatepickerModule, TimepickerModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NewappointmentdialogComponent],
  imports: [
    FormsModule,
    CommonModule,
    MatDialogModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
		TimepickerModule.forRoot(),
  ],
  entryComponents: [NewappointmentdialogComponent]
})
export class NewappointmentdialogModule { }
