import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructionsComponent } from './instructions/instructions.component';
import { StartComponent } from './start/start.component';
import { QuestionComponent } from './question/question.component';
import { ThankyouComponent } from './thankyou/thankyou.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: StartComponent},
  { path: 'instructions', component: InstructionsComponent},
  { path: 'question', component: QuestionComponent},
  { path: 'thankyou', component: ThankyouComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
