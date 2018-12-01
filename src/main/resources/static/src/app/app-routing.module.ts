import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginpageAuthService } from './services/loginpage-auth.service';
import { UserhomepageAuthService } from './services/userhomepage-auth.service';
import { DoctorAuthService } from './services/doctor-auth.service';

const routes: Routes = [{
	path: '',
	component: AppComponent,
	children: [{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: './components/home/home.module#HomeModule',
		canActivate: [LoginpageAuthService]
	},
	{
		path: 'login',
		loadChildren: './components/login/login.module#LoginModule',
		canActivate: [LoginpageAuthService]
	},
	{
		path: 'userhomepage',
		//loadChildren: './components/user-homepage/user-homepage.module#UserhomepageModule',
		loadChildren: './components/templates/user-template/user-template.module#UserTemplateModule',

		canActivate: [UserhomepageAuthService]
	},
	{
		path: 'userhomepage/edit',
		// loadChildren: './components/user-homepage/editappointments/editappointments.module#EditappointmentsModule',
		loadChildren: './components/user-homepage/editappointments/editappointments.module#EditappointmentsModule',

		canActivate: [UserhomepageAuthService]
	},
	{
		path: 'doctorhomepage',
		// loadChildren: './components/doctorhomepage/doctorhomepage.module#DoctorhomepageModule',
		loadChildren: './components/templates/doctor-template/doctor-template.module#DoctorTemplateModule',

		canActivate: [DoctorAuthService]
	},
	{
		path: 'doctorhomepage/searchappointments/:datefrom/:dateto/:text',
		loadChildren: './components/doctorsappointments/doctorsappointments.module#DoctorsappointmentsModule',
		canActivate: [DoctorAuthService]
	},
	{
		path: 'doctorhomepage/searchappointments',
		loadChildren: './components/doctorsappointments/doctorsappointments.module#DoctorsappointmentsModule',
		canActivate: [DoctorAuthService]
	},
	{
		path: 'register',
		loadChildren: './components/register/register.module#RegisterModule',
	},
	{
		path: '**',
		redirectTo: 'home'
	}
	]
}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
