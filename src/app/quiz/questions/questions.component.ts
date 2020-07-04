import { Component, OnInit } from '@angular/core';
import { questionsService } from 'src/app/services/questions';



@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions:any[];
  timeLeft: number = 180;
  interval;
  items: any;

  constructor(private questionsService:questionsService) {

    this.getQuestions();

   }

  ngOnInit(): void {

    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
      }
    },1000)

  }

  newQuestion(newQuestion: any) {
    console.log(newQuestion);
    this.questions = newQuestion.posts;
  }

  getQuestions(){
    let formdata = {
      'qstnid': '',
      'userid':  sessionStorage.getItem('id'),
      'answertxt': ''
    }
      this.questionsService.getQuestions(formdata).subscribe((res: any) => {
        if(res.result == 1){
          if(res.posts.length > 0){
            this.questions = res.posts
           // console.log(this.questions);
          }
        }
      }, (error) => {
        console.log(error);
      });
  }


}
