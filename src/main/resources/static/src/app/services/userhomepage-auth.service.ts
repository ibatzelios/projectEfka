import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserhomepageAuthService {

  constructor(private router: Router) { }
  
  canActivate(): boolean{
  	if (!localStorage.getItem("token")) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
