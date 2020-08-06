import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { answerService } from 'src/app/services/answer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Stage2DialogComponent } from '../stage2-dialog/stage2-dialog.component';
import { Stage3DialogComponent } from '../stage3-dialog/stage3-dialog.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: any;
  @Output() newQuestionEvent = new EventEmitter<string>();

  currentQuestion: any;
  showQuestion: boolean = true;
  answer: any;

  constructor(public dialog: MatDialog, private answerService: answerService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {

    setTimeout(() => {                           
      this.skip();
    }, 10000);

    this.stagetwoStart();
    this.stageThreeStart();
    this.quiz_end();
  }

  check_answer(question, answer) {
    this.currentQuestion = question;
    this.answer = answer;
    let formData = {
      'question_no': this.currentQuestion.question_no,
      'question_id': this.currentQuestion.question_id,
      'answer_no': answer,
      "level": this.currentQuestion.level,
      'userid': sessionStorage.getItem('id'),
      'is_double': sessionStorage.getItem('is_double'),
    }

    sessionStorage.setItem('question_no', this.currentQuestion.question_no);
    sessionStorage.setItem('question_id', this.currentQuestion.question_id);
    sessionStorage.setItem('current_level', this.currentQuestion.level);

    this.answerService.submitAnswer(formData).subscribe((res: any) => {
      if (res.result == 1) {
        this.newQuestionEvent.emit(res);
      }
    }, (error) => {
      this._snackBar.open(error.message, 'OK', {
        duration: 4000,
      });
    });
  }

  stagetwoStart() {
    if (parseInt(sessionStorage.getItem('question_no')) === 20) {
      if (sessionStorage.getItem('is_stage3started') == null) {
        this.showQuestion = false;
        const dialogRef = this.dialog.open(Stage2DialogComponent, {
          disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {

          this.showQuestion = true;

        });
      }
      else {
        return;
      }
    }
  }

  stageThreeStart() {
    if (parseInt(sessionStorage.getItem('question_no')) === 30) {
      if (sessionStorage.getItem('is_stage3started') == null) {
        this.showQuestion = false;
        const dialogRef = this.dialog.open(Stage3DialogComponent, {
          disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
          this.showQuestion = true;
        });
      }
      else {
        return;
      }
    }
  }

  quiz_end() {
    if (parseInt(sessionStorage.getItem('question_no')) >= 35) {
      this.showQuestion = false;
    }
  }

  skip() {
    
    let formData = {
      'question_no': sessionStorage.getItem('question_no'),
      'question_id': sessionStorage.getItem('question_id'),
      'answer_no': 'e',
      "level": sessionStorage.getItem("current_level"),
      'userid': sessionStorage.getItem('id'),
      'is_double': sessionStorage.getItem('is_double'),
    }
    this.answerService.submitAnswer(formData).subscribe((res: any) => {
      if (res.result == 1) {
        this.newQuestionEvent.emit(res);

        sessionStorage.setItem('question_no', res.posts[0].question_no);
        sessionStorage.setItem('question_id', res.posts[0].question_id);
        sessionStorage.setItem('current_level', res.posts[0].level);

        console.log(res);

      }
    }, (error) => {
      this._snackBar.open(error.message, 'OK', {
        duration: 4000,
      });
    });


  }

}




//old code


    // if (answer === this.question.correct_answer) {
    //   let formData = {
    //     'question_no': this.currentQuestion,
    //     'answer_no': answer,
    //     'userid': sessionStorage.getItem('id'),
    //   }


    //   this.answerService.submitAnswer(formData).subscribe((res: any) => {
    //     if (res.result == 1) {
    //       const dialogRef = this.dialog.open(SuccessComponent, {
    //         disableClose: true
    //       });

    //       dialogRef.afterClosed().subscribe(result => {
    //         this.newQuestionEvent.emit(res);
    //       });

    //     }

    //   }, (error) => {
    //     this._snackBar.open(error.message, 'OK', {
    //       duration: 4000,
    //     });
    //   });
    // }
    // else {
    //   let formData = {
    //     'qstnid': this.currentQuestion,
    //     'userid': sessionStorage.getItem('id'),
    //     'answertxt': answer
    //   }
    //   this.answerService.submitAnswer(formData).subscribe((res: any) => {
    //     if (res.result == 1) {
    //       const dialogRef = this.dialog.open(FailureComponent, {
    //         disableClose: true
    //       });

    //       dialogRef.afterClosed().subscribe(result => {
    //         this.newQuestionEvent.emit(res);
    //       });

    //     }

    //   }, (error) => {
    //     this._snackBar.open(error.message, 'OK', {
    //       duration: 4000,
    //     });
    //   });
    // }