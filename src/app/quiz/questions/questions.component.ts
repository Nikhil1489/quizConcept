import { Component, OnInit } from '@angular/core';
import { QUESTIONS, Question } from './../question';



@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions:Question[] = QUESTIONS;

  constructor() { }

  ngOnInit(): void {
  }


}
