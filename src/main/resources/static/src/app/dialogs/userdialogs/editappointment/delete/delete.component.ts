import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>) { }
  deleteAppointment(){
    this.dialogRef.close('delete');
  }
  cancelDeleteAppointment(){
    this.dialogRef.close('cancel');
  }
  ngOnInit() {
  }

}
