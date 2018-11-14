import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { UserhomepageAuthService } from 'src/app/services/userhomepage-auth.service';
import { UserHomepageComponent } from '../user-homepage/user-homepage.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
	      path: '',
        component: LoginComponent
      }  
    ])
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }