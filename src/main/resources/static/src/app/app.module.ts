import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { UserhomepageAuthService } from './services/userhomepage-auth.service';
import { LoginpageAuthService } from './services/loginpage-auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoctorService } from './services/doctor.service';
import { DoctorAuthService } from './services/doctor-auth.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    UserhomepageAuthService,
    LoginpageAuthService,
    DoctorService,
    DoctorAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
