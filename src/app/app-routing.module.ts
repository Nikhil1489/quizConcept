import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';



const routes: Routes = [
  { path: '', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'quiz', loadChildren: './quiz/quiz.module#QuizModule' },
  { path: '**', redirectTo: 'register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
