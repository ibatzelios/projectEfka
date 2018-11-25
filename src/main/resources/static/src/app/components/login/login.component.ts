import { Component, OnInit } from '@angular/core';
import { user } from '../../models/userModel';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { loginModel } from '../../models/loginModel';
import { RegisterdialogComponent } from 'src/app/dialogs/registerDialog/registerdialog/registerdialog.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: any;
  alert = false;
  user: user[] = [];
  constructor(private router: Router, private userService: UserService,  public dialog: MatDialog) { }

  login(loginForm) {
    let newUsername = loginForm.value.exampleRadios + loginForm.value.loginUsername;
    let newUser: loginModel = {
      username: newUsername,
      password: loginForm.value.loginPassword
    };
    this.userService.login(newUser).subscribe((data) => {
      if (loginForm.value.exampleRadios == 'p') {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/userhomepage']);
        setTimeout(function () {
          loginForm.reset();
        }, 1000);
      } else if (loginForm.value.exampleRadios == 'd') {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/doctorhomepage']);
        setTimeout(function () {
          loginForm.reset();
        }, 1000);
      } else {
        console.log('wrong inputs');
      }
    });
  }
  openRegisterDialog(){
      const dialogRef = this.dialog.open(RegisterdialogComponent, {
        width: '50%'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result != null){
        this.message= result.status;
        this.alert = result.exists;
        } else {
        this.alert = false;
        }
      });
    }
  ngOnInit() {
  }

}
