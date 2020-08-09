import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { answerService } from 'src/app/services/answer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Stage2DialogComponent } from '../stage2-dialog/stage2-dialog.component';
import { Stage3DialogComponent } from '../stage3-dialog/stage3-dialog.component';
import { questionsService } from 'src/app/services/questions';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: any;
  @Output() newQuestionEvent = new EventEmitter<string>();

  currentQuestion: any = 0;
  showQuestion: boolean = false;
  answer: any
  session_question_number: any;
  questions: any;
  data: { answer: any; level: any; option_a: any; option_b: any; option_c: any; option_d: any; question_title: any; question_id: any; question_no: number; };
  quiz_end: boolean;
  show_instructions: boolean = true;
  is_quiz_started:any;

  constructor(public dialog: MatDialog,
    private answerService: answerService,
    private _snackBar: MatSnackBar,
    private questionsService: questionsService) {
  }

  ngOnInit(): void {

    if(sessionStorage.getItem('quiz_started') === 'yes')
    {
      this.show_instructions = false;
      this.getQuestions();
    }

  }

  start_quiz() {
    this.show_instructions = false;
    sessionStorage.setItem('quiz_started', 'yes');
    this.getQuestions();
  }


  getQuestions() {

    if (sessionStorage.getItem('question_no') === null) {
      let formdata = {
        'question_no': 0,
        'answer_no': '',
        'level': 1,
        'userid': sessionStorage.getItem('id'),
      }
      this.getQuestionsFromService(formdata);

      setTimeout(() => {
        this.skip();
      }, 6000);

    }
    else {
      if (parseInt(sessionStorage.getItem('question_no')) <= 4) {

        let formdata = {
          'question_no': this.currentQuestion.question_no,
          'question_id': this.currentQuestion.question_id,
          'answer_no': 'e',
          "level": this.currentQuestion.level,
          'userid': sessionStorage.getItem('id'),
          'is_double': sessionStorage.getItem('is_double'),
        }
        this.getQuestionsFromService(formdata);

        setTimeout(() => {
          this.skip();
        }, 6000);

      }
      else if (parseInt(sessionStorage.getItem('question_no')) === 5) {
        this.showQuestion = false;
        this.show_instructions = false;
        this.stagetwoStart();
       
      }
      if (parseInt(sessionStorage.getItem('question_no')) >= 6 && parseInt(sessionStorage.getItem('question_no')) <= 9) {

        let formdata = {
          'question_no': parseInt(sessionStorage.getItem('question_no')),
          'question_id': parseInt(sessionStorage.getItem('question_id')),
          'answer_no': 'e',
          "level": parseInt(sessionStorage.getItem('level')),
          'userid': sessionStorage.getItem('id'),
          'is_double': sessionStorage.getItem('is_double'),
        }
        this.getQuestionsFromService(formdata);

        setTimeout(() => {
          this.skip();
        }, 6000);

      }
      else if (parseInt(sessionStorage.getItem('question_no')) === 10) {
        this.showQuestion = false;
        this.show_instructions = false;
        this.stageThreeStart();
      }
      else if(parseInt(sessionStorage.getItem('question_no')) >= 11 && parseInt(sessionStorage.getItem('question_no')) <= 17)
      {

        let formdata = {
          'question_no': this.currentQuestion.question_no,
          'question_id': this.currentQuestion.question_id,
          'answer_no': 'e',
          "level": this.currentQuestion.level,
          'userid': sessionStorage.getItem('id'),
          'is_double': sessionStorage.getItem('is_double'),
        }
        this.getQuestionsFromService(formdata);

        setTimeout(() => {
          this.skip();
        }, 6000);

      }
      else if (parseInt(sessionStorage.getItem('question_no')) === 18) {
        this.showQuestion = false;
        this.show_instructions = false;
        this.quiz_end = true;
      }
      else {
        
        if (parseInt(sessionStorage.getItem('question_no')) >= 6 && parseInt(sessionStorage.getItem('question_no')) <= 9) {

          let formdata = {
            'question_no': parseInt(sessionStorage.getItem('question_no')),
            'question_id': parseInt(sessionStorage.getItem('question_id')),
            'answer_no': 'e',
            "level": parseInt(sessionStorage.getItem('level')),
            'userid': sessionStorage.getItem('id'),
            'is_double': sessionStorage.getItem('is_double'),
          }
          this.getQuestionsFromService(formdata);
  
          setTimeout(() => {
            this.skip();
          }, 6000);
  
        }
        else{
          return;
        }

      }
    }

  }


  check_answer(question, answer, event) {

    if (!event.detail || event.detail == 1) {

      this.currentQuestion = question;
      this.answer = answer;
      if (this.currentQuestion && this.answer) {
        let formData = {
          'question_no': this.currentQuestion.question_no,
          'question_id': this.currentQuestion.question_id,
          'answer_no': answer,
          "level": this.currentQuestion.level,
          'userid': sessionStorage.getItem('id'),
          'is_double': sessionStorage.getItem('is_double'),
        }

        this.answerService.submitAnswer(formData).subscribe((res: any) => {
          if (res.result == 1) {
            this.getQuestions();
          }
        }, (error) => {
          this._snackBar.open(error.message, 'OK', {
            duration: 4000,
          });
        });

      }
    }

  }

  stagetwoStart() {
    this.showQuestion = false;

    if (sessionStorage.getItem('is_stage2started') == null) {
      const dialogRef = this.dialog.open(Stage2DialogComponent, {
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {

        let formdata = {
          'question_no': this.currentQuestion.question_no,
          'question_id': this.currentQuestion.question_id,
          'answer_no': 'e',
          "level": this.currentQuestion.level,
          'userid': sessionStorage.getItem('id'),
          'is_double': sessionStorage.getItem('is_double'),
        }
        this.getQuestionsFromService(formdata);

        this.showQuestion = true;

        this.getQuestions();

      });
    }
    else {
      return;
    }
  }

  stageThreeStart() {
    if (sessionStorage.getItem('is_stage3started') == null) {
      const dialogRef = this.dialog.open(Stage3DialogComponent, {
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {
        let formdata = {
          'question_no': this.currentQuestion.question_no,
          'question_id': this.currentQuestion.question_id,
          'answer_no': 'e',
          "level": this.currentQuestion.level,
          'userid': sessionStorage.getItem('id'),
          'is_double': sessionStorage.getItem('is_double'),
        }
        this.getQuestionsFromService(formdata);

        this.showQuestion = true;
        this.getQuestions();

      });
    }
    else {
      return;
    }
  }



  skip() {
    sessionStorage.setItem('question_no', this.currentQuestion.question_no);
    sessionStorage.setItem('question_id', this.currentQuestion.question_id);
    sessionStorage.setItem('current_level', this.currentQuestion.level);
    this.getQuestions();
  }


  getQuestionsFromService(formdata) {
    this.questionsService.getQuestions(formdata).subscribe((res: any) => {
      if (res.result === 1) {
        if (res.posts.length > 0) {
          this.questions = res.posts;
         this.currentQuestion = this.data = {
            answer: this.questions[0].answer,
            level: this.questions[0].level,
            option_a: this.questions[0].option_a,
            option_b: this.questions[0].option_b,
            option_c: this.questions[0].option_c,
            option_d: this.questions[0].option_d,
            question_title: this.questions[0].question_title,
            question_id: this.questions[0].question_id,
            question_no: this.questions[0].question_no
          }
          this.showQuestion = true;
          sessionStorage.setItem('question_no', res.posts[0].question_no);
          sessionStorage.setItem('question_id', res.posts[0].question_id);
          sessionStorage.setItem('current_level', res.posts[0].level);
        }
      }
    }, (error) => {
      console.log(error);
    });
  }

}
  // skip() {
  //   let formData = {
  //     'question_no': sessionStorage.getItem('question_no'),
  //     'question_id': sessionStorage.getItem('question_id'),
  //     'answer_no': 'e',
  //     "level": sessionStorage.getItem("current_level"),
  //     'userid': sessionStorage.getItem('id'),
  //     'is_double': sessionStorage.getItem('is_double'),
  //   }
  //   this.answerService.submitAnswer(formData).subscribe((res: any) => {
  //     if (res.result == 1) {

  //       let formData = {
  //         'question_no': res.posts[0].question_no,
  //         'question_id': res.posts[0].question_id,
  //         'answer_no': 'e',
  //         "level": res.posts[0].level,
  //         'userid': sessionStorage.getItem('id'),
  //         'is_double': sessionStorage.getItem('is_double'),
  //       }
  //       //this.getQuestionsFromService(formData);

  //       sessionStorage.setItem('question_no', res.posts[0].question_no);
  //       sessionStorage.setItem('question_id', res.posts[0].question_id);
  //       sessionStorage.setItem('current_level', res.posts[0].level);


  //     }
  //   }, (error) => {
  //     this._snackBar.open(error.message, 'OK', {
  //       duration: 4000,
  //     });
  //   });
  // }


    // if(this.session_question_number <= 20)
    // {
    //   setTimeout(() => {
    //     this.skip();
    //   }, 2000);
    // }
    // else if(this.session_question_number === 21)
    // {
    //   this.showQuestion = false;
    //   this.stagetwoStart();
    // }
    // else if(this.session_question_number >= 22 && this.session_question_number <= 30)
    // {
    //   setTimeout(() => {
    //     this.skip();
    //   }, 3000);
    // }
    // else if(this.session_question_number == 31)
    // {
    //   this.showQuestion = false;
    //   this.stageThreeStart();
    // }
    // else if(this.session_question_number >= 32 && this.session_question_number <= 35)
    // {
    //   setTimeout(() => {
    //     this.skip();
    //   }, 4000);
    // }

    // this.quiz_end();

