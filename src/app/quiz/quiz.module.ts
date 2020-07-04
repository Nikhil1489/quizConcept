import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { MaterialModule } from '../material/material.module';
import { StartComponent } from './start/start.component';
import { QuestionComponent } from './question/question.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { FailureComponent } from './failure/failure.component';
import { SuccessComponent } from './success/success.component';
import { QuestionsComponent } from './questions/questions.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [StartComponent, QuestionComponent, ThankyouComponent, InstructionsComponent, FailureComponent,
    SuccessComponent,
    QuestionsComponent,
    HeaderComponent],
  imports: [
    CommonModule,
    QuizRoutingModule,
    MaterialModule
  ]
})
export class QuizModule { }
