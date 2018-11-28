import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-patientsdetails',
  templateUrl: './patientsdetails.component.html',
  styleUrls: ['./patientsdetails.component.css']
})
export class PatientsdetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any){ }
    
     details = this.data.patient;
    
    
    
  ngOnInit() {
  }

}
