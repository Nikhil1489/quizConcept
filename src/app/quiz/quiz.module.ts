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
import { Stage2DialogComponent } from './stage2-dialog/stage2-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Stage3DialogComponent } from './stage3-dialog/stage3-dialog.component';


@NgModule({
  declarations: [StartComponent, QuestionComponent, ThankyouComponent, InstructionsComponent, FailureComponent,
    SuccessComponent,
    QuestionsComponent,
    HeaderComponent,
    Stage2DialogComponent,
    Stage3DialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    QuizRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class QuizModule { }
