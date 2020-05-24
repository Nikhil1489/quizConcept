import { Component, OnInit } from '@angular/core';
import { SuccessComponent } from '../success/success.component';
import { MatDialog } from '@angular/material/dialog';
import { FailureComponent } from '../failure/failure.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  go_back(){
    window.history.back();
  }

  success(){
    const dialogRef = this.dialog.open(SuccessComponent, {
      disableClose: true
    });
  }

  failure(){
    const dialogRef = this.dialog.open(FailureComponent, {
      disableClose: true
    });
  }

}
