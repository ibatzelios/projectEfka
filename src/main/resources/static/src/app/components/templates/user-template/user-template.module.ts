import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTemplateComponent } from './user-template.component';
import { UsernavbarModule } from 'src/app/navbars/usernavbar/usernavbar.module';
import { RouterModule } from '@angular/router';
import { UserhomepageAuthService } from 'src/app/services/userhomepage-auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserTemplateComponent],
  imports: [
    CommonModule,
    UsernavbarModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserTemplateComponent,
        children: [
          {
            path: '',
            loadChildren: '../../../components/user-homepage/user-homepage.module#UserhomepageModule',
            canActivate: [UserhomepageAuthService]
          },
          {
            path: 'edit',
            loadChildren: '../../../components/user-homepage/editappointments/editappointments.module#EditappointmentsModule',
            canActivate: [UserhomepageAuthService]
          },
          {
            path: '**',
            redirectTo: ''
          }
        ]
      }
    ])
  ]

})
export class UserTemplateModule { }
