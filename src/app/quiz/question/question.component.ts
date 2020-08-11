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
  answer: any
  session_question_number: any;
  is_answered: boolean = false;
  skipQuestion: any;
  timeLeft: number;
  displayTime: number;
  interval: any;

  constructor(public dialog: MatDialog, private answerService: answerService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {

    this.session_question_number = parseInt(sessionStorage.getItem('question_no'));

    if (this.session_question_number <= 20) {

      this.timeLeft = 30;
      this.interval = setInterval(() => {
          if (this.timeLeft > 0) {
            this.displayTime = this.timeLeft--;
          } else {
            this.displayTime = this.timeLeft = 0;
          }
      }, 1000)
        
     this.skipQuestion = setTimeout(() => {
          this.skip();
        }, 30000);
 
    }
    else if (this.session_question_number === 21) {
      this.showQuestion = false;
      this.stagetwoStart();
    }
    else if (this.session_question_number >= 22 && this.session_question_number <= 30) {

      this.timeLeft = 60;
      this.interval = setInterval(() => {
          if (this.timeLeft > 0) {
            this.displayTime = this.timeLeft--;
          } else {
            this.displayTime = this.timeLeft = 0;
          }
      }, 1000)
      
      this.skipQuestion = setTimeout(() => {
        this.skip();
      }, 60000);

    }
    else if (this.session_question_number == 31) {
      this.showQuestion = false;
      this.stageThreeStart();
    }
    else if (this.session_question_number >= 32 && this.session_question_number <= 35) {

      this.timeLeft = 120;
      this.interval = setInterval(() => {
          if (this.timeLeft > 0) {
            this.displayTime = this.timeLeft--;
          } else {
            this.displayTime = this.timeLeft = 0;
          }
      }, 1000)
      
      this.skipQuestion = setTimeout(() => {
        this.skip();
      }, 120000);

    }

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

    this.is_answered = true;    

    this.answerService.submitAnswer(formData).subscribe((res: any) => {

      clearTimeout(this.skipQuestion);

      sessionStorage.setItem('question_no', res.posts[0].question_no);
      sessionStorage.setItem('question_id', res.posts[0].question_id);
      sessionStorage.setItem('current_level', res.posts[0].level);

      this.newQuestionEvent.emit(res);


    }, (error) => {
      this._snackBar.open(error.message, 'OK', {
        duration: 4000,
      });
    });
  }

  stagetwoStart() {
    if (sessionStorage.getItem('is_stage2started') == null) {
      const dialogRef = this.dialog.open(Stage2DialogComponent, {
        disableClose: true,
        maxWidth: '320px'
      });
      dialogRef.afterClosed().subscribe(result => {
        this.showQuestion = true;

        this.timeLeft = 60;
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
              this.displayTime = this.timeLeft--;
            } else {
              this.displayTime = this.timeLeft = 0;
            }
        }, 1000)

        this.skipQuestion = setTimeout(() => {
          this.skip();
        }, 60000);

      });
    }
    else {
      return;
    }
  }

  stageThreeStart() {
    if (parseInt(sessionStorage.getItem('question_no')) === 31) {
      if (sessionStorage.getItem('is_stage3started') == null) {
        this.showQuestion = false;
        const dialogRef = this.dialog.open(Stage3DialogComponent, {
          disableClose: true,
          maxWidth: '320px'
        });
        dialogRef.afterClosed().subscribe(result => {
          this.showQuestion = true;

          this.timeLeft = 120;
          this.interval = setInterval(() => {
              if (this.timeLeft > 0) {
                this.displayTime = this.timeLeft--;
              } else {
                this.displayTime = this.timeLeft = 0;
              }
          }, 1000)
          
          this.skipQuestion = setTimeout(() => {
            this.skip();
          }, 12000);

        });
      }
      else {
        return;
      }
    }
  }

  quiz_end() {
    if (parseInt(sessionStorage.getItem('question_no')) === 36) {
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
        clearTimeout(this.skipQuestion);
        this.newQuestionEvent.emit(res);
        sessionStorage.setItem('question_no', res.posts[0].question_no);
        sessionStorage.setItem('question_id', res.posts[0].question_id);
        sessionStorage.setItem('current_level', res.posts[0].level);
      }
    }, (error) => {
      this._snackBar.open(error.message, 'OK', {
        duration: 4000,
        panelClass: 'custom_snack'
      });
    });
  }
}

