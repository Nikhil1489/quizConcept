import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SuccessComponent>,  private router:Router) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
    this.router.navigateByUrl('thankyou');
  }

}
