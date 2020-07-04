import { Component, OnInit } from '@angular/core';
import { questionsService } from 'src/app/services/questions';



@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions:any[];

  constructor(private questionsService:questionsService) {

    this.getQuestions();

   }

  ngOnInit(): void {
  }

  getQuestions(){
    let formdata = {
      'currentQuestion': '',
      'currentUser':  sessionStorage.getItem('id'),
      'answer': ''
    }
      this.questionsService.getQuestions(formdata).subscribe((res: any) => {
        if(res.result == 1){
          if(res.posts.length > 0){
            this.questions = res.posts
            console.log(this.questions);
          }
        }
      }, (error) => {
        console.log(error);
      });
  }


}
