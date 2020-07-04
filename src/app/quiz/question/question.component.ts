import { Component, OnInit, Input } from '@angular/core';
import { SuccessComponent } from '../success/success.component';
import { MatDialog } from '@angular/material/dialog';
import { FailureComponent } from '../failure/failure.component';
import { Question } from '../question';
import { answerService } from 'src/app/services/answer';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: any;
  currentQuestion: number;

  constructor(public dialog: MatDialog, private answerService: answerService, private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  success(){
    const dialogRef = this.dialog.open(SuccessComponent, {
      disableClose: true
    });
  }

  check_answer(question, answer){
   this.currentQuestion =  question.id;
   if(answer === this.question.correct_answer){
    let formData = { 
      'currentQuestion': this.currentQuestion,
      'currentUser':  sessionStorage.getItem('id'),
      'answer': answer
    }
    this.answerService.submitAnswer(formData).subscribe((res: any) => {
      
      if(res.result == 1)
      {
        this.success();
      }

    }, (error) => {
      this._snackBar.open(error.message, 'OK', {
        duration: 4000,
      });
    });
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
