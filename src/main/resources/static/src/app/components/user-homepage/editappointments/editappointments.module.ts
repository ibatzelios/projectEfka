import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditappointmentsComponent } from './editappointments.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { DeleteModule } from 'src/app/dialogs/userdialogs/editappointment/delete/delete.module';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    DeleteModule,
    NgbModule,
    FormsModule,
    ModalModule.forRoot(),
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: EditappointmentsComponent
      }
    ])
  ],
  declarations: [EditappointmentsComponent]
})
export class EditappointmentsModule { }
