import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  imports: [
    MatDialogModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [RegisterComponent,
  
    // AlertComponent
  ]
})
export class RegisterModule { }