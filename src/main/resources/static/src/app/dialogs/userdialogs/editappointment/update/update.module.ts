import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update.component';
import { MatDialogModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TimepickerModule, BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [UpdateComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    NgbModule,
    FormsModule,
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ]
  // ,
  // entryComponents: [UpdateComponent]
})
export class UpdateModule { }
