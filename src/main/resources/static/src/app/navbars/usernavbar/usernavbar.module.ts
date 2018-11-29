import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsernavbarComponent } from './usernavbar.component';

@NgModule({
  declarations: [UsernavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UsernavbarComponent
]
})
export class UsernavbarModule { }
