import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: RegisterComponent
    }]),
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }