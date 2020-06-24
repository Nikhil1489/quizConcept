import { Component, OnInit, Input } from '@angular/core';
import { SuccessComponent } from '../success/success.component';
import { MatDialog } from '@angular/material/dialog';
import { FailureComponent } from '../failure/failure.component';
import { Question } from '../question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  success(){
    const dialogRef = this.dialog.open(SuccessComponent, {
      disableClose: true
    });
  }

  check_answer(answer){
   if(answer === this.question.correctAnswer){
     this.success();
   }
   else{
     this.failure();
   }
  }

  failure(){
    const dialogRef = this.dialog.open(FailureComponent, {
      disableClose: true
    });
  }

}
