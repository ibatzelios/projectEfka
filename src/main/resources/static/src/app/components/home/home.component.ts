import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { RegisterdialogComponent } from 'src/app/dialogs/registerDialog/registerdialog/registerdialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sub: any;
  message: any;
  alert = false;
 
  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(){
   };
  
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
  }

