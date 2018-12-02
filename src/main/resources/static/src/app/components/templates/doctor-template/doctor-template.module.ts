import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorTemplateComponent } from './doctor-template.component';
import { RouterModule } from '@angular/router';
import { DoctorAuthService } from 'src/app/services/doctor-auth.service';
import { DoctornavbarModule } from 'src/app/navbars/doctornavbar/doctornavbar.module';

@NgModule({
  declarations: [DoctorTemplateComponent],
  imports: [
    CommonModule,
    DoctornavbarModule,
    RouterModule.forChild([
      {
        path: '',
        component: DoctorTemplateComponent,
        children: [
          {
            path: '',
            loadChildren: '../../../components/doctorhomepage/doctorhomepage.module#DoctorhomepageModule',
            canActivate: [DoctorAuthService]
          },
          {
            path: 'searchappointments/:datefrom/:dateto/:text',
            loadChildren: '../../../components/doctorsappointments/doctorsappointments.module#DoctorsappointmentsModule',
            canActivate: [DoctorAuthService]
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
export class DoctorTemplateModule { }
