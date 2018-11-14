import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginpageAuthService } from './services/loginpage-auth.service';
import { UserhomepageAuthService } from './services/userhomepage-auth.service';

const routes: Routes = [
{ 
	path: '', 
	component: AppComponent,
	children: [{
		path:'',
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
	loadChildren: './components/user-homepage/user-homepage.module#UserhomepageModule',
	canActivate: [UserhomepageAuthService]
	},
	{
		path: 'doctorhomepage',
		loadChildren: './components/doctorhomepage/doctorhomepage.module#DoctorhomepageModule',
		canActivate: [UserhomepageAuthService]
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
