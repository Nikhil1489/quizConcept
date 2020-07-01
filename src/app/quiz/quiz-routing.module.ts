import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { QuestionComponent } from './question/question.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { QuestionsComponent } from './questions/questions.component';


const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full'},
  { path: 'start', component: StartComponent},
  { path: 'instructions', component: InstructionsComponent},
  { path: 'question', component: QuestionComponent},
  { path: 'questions', component: QuestionsComponent},
  { path: 'thankyou', component: ThankyouComponent},
  { path: '**', redirectTo: 'register' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
