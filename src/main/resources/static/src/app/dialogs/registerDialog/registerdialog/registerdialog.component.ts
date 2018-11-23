import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-registerdialog',
  templateUrl: './registerdialog.component.html',
  styleUrls: ['./registerdialog.component.css']
})
export class RegisterdialogComponent implements OnInit {
  

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
ngOnInit(){}
}
