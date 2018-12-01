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
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateComponent } from 'src/app/dialogs/userdialogs/editappointment/update/update.component';
import { UpdateModule } from 'src/app/dialogs/userdialogs/editappointment/update/update.module';
import { UserTemplateModule } from '../../templates/user-template/user-template.module';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    DeleteModule,
    UpdateModule,
    // UserTemplateModule,
    //UsernavbarModule,
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
  declarations: [EditappointmentsComponent],
  entryComponents: [UpdateComponent]
})
export class EditappointmentsModule { }
