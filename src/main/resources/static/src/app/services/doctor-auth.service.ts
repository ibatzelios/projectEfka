import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class DoctorAuthService {

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (!sessionStorage.getItem('doctortoken')) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}