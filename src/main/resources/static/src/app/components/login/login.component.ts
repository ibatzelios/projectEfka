import { Component, OnInit } from '@angular/core';
import { user } from '../../models/userModel';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { loginModel } from '../../models/loginModel';
import { RegisterdialogComponent } from 'src/app/dialogs/registerdialog/registerdialog.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  message: any;
  alert = false;
  user: user[] = [];
  loginErrorMessage: any;
  registerErrorMessage: any;

  constructor(private router: Router, private userService: UserService, public dialog: MatDialog) { }

  login(loginForm) {
    this.loading = true;
    console.log(this.loading);
    let newUsername = loginForm.value.exampleRadios + loginForm.value.loginUsername;
    let newUser: loginModel = {
      username: newUsername,
      password: loginForm.value.loginPassword
    };
    this.userService.login(newUser).subscribe((data) => {
      console.log(data);
      if (loginForm.value.exampleRadios == 'p') {
        sessionStorage.setItem('token', 'true');
        this.router.navigate(['/userhomepage']);
        this.loading = false;
        setTimeout(function () {
          loginForm.reset();
        }, 1000);
      } else if (loginForm.value.exampleRadios == 'd') {
        sessionStorage.setItem('doctortoken', 'true');
        this.router.navigate(['/doctorhomepage']);
        this.loading = false;
        setTimeout(function () {
          loginForm.reset();
        }, 1000);
      } else {
        this.loading = false;
      }
    }, error => {
      this.loginErrorMessage = 'Wrong Inputs';
      this.loading = false;
    });
  }
  openRegisterDialog() {
    const dialogRef = this.dialog.open(RegisterdialogComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.registerErrorMessage = result.errorMessage;
        this.message = result.status;
        this.alert = result.exists;
      } else {
        this.alert = false;
      }
    });
  }
  ngOnInit() {
  }

}
