import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { RegisterdialogComponent } from 'src/app/dialogs/registerdialog/registerdialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sub: any;
  message: any;
  alert = false;
  registerErrorMessage: any;
  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(){
   };
  
  openRegisterDialog(){
      const dialogRef = this.dialog.open(RegisterdialogComponent, {
        width: '50%'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result != null){
        this.registerErrorMessage = result.errorMessage;
        this.message= result.status;
        this.alert = result.exists;
        } else {
        this.alert = false;
        }
      });
    }
  }

