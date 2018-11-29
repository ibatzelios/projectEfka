import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usernavbar',
  templateUrl: './usernavbar.component.html',
  styleUrls: ['./usernavbar.component.css']
})
export class UsernavbarComponent implements OnInit {
  loggedUser: any;
  username: any;
  constructor(private userService: UserService,  private router: Router) { }
  logout() {
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }
  ngOnInit() {
    this.userService.getLastName().subscribe((data)=>{
      this.username = data;
      this.loggedUser = this.username.lastName;
    });
  }

}
