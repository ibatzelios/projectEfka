import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { user } from 'src/app/models/userModel';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

export interface DialogData {
  status: boolean;
  exists: boolean;
}

@Component({
  selector: 'app-registerdialog',
  templateUrl: './registerdialog.component.html',
  styleUrls: ['./registerdialog.component.css']
})
export class RegisterdialogComponent implements OnInit {

  user: user[] = [];
  loading = false;
  alertInfo: DialogData;
  
  constructor(
    public dialogRef: MatDialogRef<any>, private router: Router, private userService: UserService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  registerUser(registerForm: NgForm) {
    console.log(registerForm);
    let newUser: user = {
      amka: registerForm.value.registerAmka,
      firstName: registerForm.value.registerfName,
      lastName: registerForm.value.registerlName,
      email: registerForm.value.registerEmail,
      username: registerForm.value.registerUsername,
      password: registerForm.value.registerPassword,
      phone: registerForm.value.registerPhone
    };
    console.log(newUser);
    this.loading = true;
    this.userService.register(newUser).subscribe((data) => {
        registerForm.reset();
        let status = true;
        let exists = true;
        
        this.dialogRef.close({status, exists});
    }, error => {
      registerForm.reset();
      let status = false;
      let exists = true;
        
      this.dialogRef.close({status, exists});
    });
  }
  ngOnInit() {

  }
   }
