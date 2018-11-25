import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from '../../models/userModel';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: user[] = [];
  loading = false;
  constructor(private router: Router, private userService: UserService) {

  }

  registerUser(registerForm: NgForm) {
    console.log(registerForm.value.registerAmka);

    let newUser: user = {
      amka: registerForm.value.registerAmka,
      firstName: registerForm.value.registerfName,
      lastName: registerForm.value.registerlName,
      email: registerForm.value.registerEmail,
      username: registerForm.value.registerUsername,
      password: registerForm.value.registerPassword,
      phone: registerForm.value.registerPhone
    };
    this.loading = true;
    this.userService.register(newUser).subscribe((data) => {
        let message = 'Registration Successful';
        this.router.navigate(['/home', message]);
        registerForm.reset();
    }, error => {
      console.log(error);
      let message = 'Registration Failed';
        this.router.navigate(['/home', message]);
    });
  }
  ngOnInit() {

  }

}
