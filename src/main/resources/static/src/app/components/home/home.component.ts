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
  successMessage: any;
  failedMessage: any;
  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if(params['message'] == 'Registration Successful'){
        this.successMessage = params['message']; 
      } else {
        this.failedMessage = params['message'];
      }
      
   });
  }
  openRegisterDialog(){
    console.log('open dialogggggggggg');
      const dialogRef = this.dialog.open(RegisterdialogComponent, {
        width: '700px',
        //data: {name: this.name, animal: this.animal}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        //this.animal = result;
      });
    }
  }

