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

  constructor() {

  }

  ngOnInit(): void {

  }

}