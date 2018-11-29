import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctornavbar',
  templateUrl: './doctornavbar.component.html',
  styleUrls: ['./doctornavbar.component.css']
})
export class DoctornavbarComponent implements OnInit {
  username: any;
  loggedUser: any;
  constructor(private doctorService: DoctorService, private router: Router) { }
  logout() {
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }
  ngOnInit() {
    this.doctorService.getLastName().subscribe((data) => {
      this.username = data;
      this.loggedUser = this.username.lastName;
    });
  }

}
