import { Component, OnInit } from '@angular/core';
import { questionsService } from 'src/app/services/questions';



@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions: any[];
  timeLeft: any = 0;
  interval;
  items: any;
  totalTime: any;
  displayTime: any;
  showQuestions: boolean = true;
  totalDisplayTime: any;

  constructor(private questionsService: questionsService) {

    this.getQuestions();

  }

  ngOnInit(): void {

  }

  newQuestion(newQuestion: any) {
    this.questions = newQuestion.posts;
    if (newQuestion.end_quiz === 1) {
      this.showQuestions = false;
    }
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
    }
    else {
      let formdata = {
        'question_no': sessionStorage.getItem("question_no"),
        'question_id': sessionStorage.getItem("question_id"),
        'answer_no': 'e',
        'level': 1,
        'userid': sessionStorage.getItem('id'),
        'is_double': sessionStorage.getItem('is_double'),
      }
      this.getQuestionsFromService(formdata);
    }
  }

  formatTime(time) {
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    //console.log({ hrs, mins, secs })

    var ret = "";
    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  }


  getQuestionsFromService(formdata) {
    this.questionsService.getQuestions(formdata).subscribe((res: any) => {
      if (res.result === 1) {
        if (res.posts.length > 0) {
          this.questions = res.posts;
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

//old colde

        // if (res.posts.length > 0) {
        //   this.questions = res.posts;
        //   console.log(res.fynmins);
        //   if (res.fynmins !== "-1") {
        //     this.showQuestions = true;
        //     this.timeLeft = res.fynmins;
        //     this.totalTime = res.totalmins;
        //     this.totalDisplayTime = this.formatTime(this.totalTime);

        //     this.interval = setInterval(() => {
        //       if (this.timeLeft < this.totalTime) {
        //         this.displayTime = this.timeLeft++;
        //         this.displayTime = this.formatTime(this.displayTime);
        //       } else {
        //         this.timeLeft = this.totalTime;
        //       }
        //     }, 1000)
        //   } else {
        //     this.showQuestions = false;
        //   }
        // }