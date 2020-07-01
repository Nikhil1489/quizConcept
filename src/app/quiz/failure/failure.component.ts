import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-failure',
  templateUrl: './failure.component.html',
  styleUrls: ['./failure.component.scss']
})
export class FailureComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FailureComponent>, private router:Router) { }

  ngOnInit(): void {
  }
  
  close(){
    this.dialogRef.close();
    //this.router.navigateByUrl('thankyou');
  }

}
