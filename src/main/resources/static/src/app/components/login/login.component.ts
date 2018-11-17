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
    let newUsername = loginForm.value.exampleRadios + loginForm.value.loginUsername;
    let newUser: loginModel = {
      username: newUsername,
      password: loginForm.value.loginPassword
    };
    console.log(newUser);
    this.userService.login(newUser).subscribe((data) => {
      if(loginForm.value.exampleRadios == 'p'){
      console.log('Hello Patient');
      localStorage.setItem('token', 'true');
      this.router.navigate(['/userhomepage']);
      setTimeout(function () {
        loginForm.reset();
      }, 1000);
    } else if(loginForm.value.exampleRadios == 'd'){
      console.log('Hello Doctor');
      localStorage.setItem('token', 'true');
      this.router.navigate(['/doctorhomepage']);
      setTimeout(function () {
        loginForm.reset();
      }, 1000);
    } else {
      console.log("wrong inputs");
    }
    });
  }

  ngOnInit() {
  }

}
