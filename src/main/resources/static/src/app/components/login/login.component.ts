import { Component, OnInit } from '@angular/core';
import { user } from '../../models/userModel';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { loginModel } from '../../models/loginModel';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: user[] = [];
  constructor(private router: Router, private userService: UserService) { }

  login(loginForm) {
    let newUser: loginModel = {
      username: loginForm.value.loginUsername,
      password: loginForm.value.loginPassword
    };
    console.log(newUser);
    this.userService.login(newUser).subscribe((data) => {
      console.log('registered');
      localStorage.setItem('token', 'true');
      this.router.navigate(['/userhomepage']);
      // }
      // ,
      //   (error) => {
      //     localStorage.clear();
      //     // localStorage.setItem('token', 'true');
      //     // console.log('NOT registered');
      //     console.log(error);
      //     // this.router.navigate(['/userhomepage']);
    });
    setTimeout(function () {
      loginForm.reset();
    }, 1000);
  }

  ngOnInit() {
  }

}
