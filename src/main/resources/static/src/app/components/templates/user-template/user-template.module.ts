import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserTemplateComponent } from './user-template.component';
import { UsernavbarModule } from 'src/app/navbars/usernavbar/usernavbar.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserTemplateComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    UsernavbarModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserTemplateComponent
      }
    ])
  ]
  
})
export class UserTemplateModule { }
