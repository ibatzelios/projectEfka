import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterdialogComponent } from '../registerdialog/registerdialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatDialogModule
  ],
  declarations: [RegisterdialogComponent],

  entryComponents: [RegisterdialogComponent]

})
export class RegisterdialogModule { }