import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-stage3-dialog',
  templateUrl: './stage3-dialog.component.html',
  styleUrls: ['./stage3-dialog.component.scss']
})
export class Stage3DialogComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<Stage3DialogComponent>) { }

  ngOnInit(): void {
  }

  start(){
    sessionStorage.setItem('is_stage3started', 'yes');
    this.dialogRef.close();
  }

}
