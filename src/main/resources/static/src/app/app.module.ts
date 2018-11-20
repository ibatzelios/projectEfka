import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { UserhomepageAuthService } from './services/userhomepage-auth.service';
import { LoginpageAuthService } from './services/loginpage-auth.service';
import { AlertService } from './services/alert.service';
// import { AlertComponent } from './components/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    // AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AlertService,
    UserService,
    UserhomepageAuthService,
    LoginpageAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
