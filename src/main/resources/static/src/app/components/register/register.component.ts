import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from '../../models/userModel';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: user[] = [];
  loading = false;
  constructor(private router: Router, private userService: UserService,
    private alertService: AlertService) {

  }

  registerUser(registerForm: NgForm) {
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
      this.alertService.success('Registration successful');
      this.router.navigate(['/']);
      registerForm.reset();
    });
  }
  ngOnInit() {

  }

}
