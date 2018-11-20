import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
//import { AlertComponent } from '../../components/alert/alert.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: RegisterComponent
    }]),
  ],
  declarations: [RegisterComponent,
    // AlertComponent
  ]
})
export class RegisterModule { }