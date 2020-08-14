import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotRunningComponent } from './not-running/not-running.component';
import { RegisterationSuccessComponent } from './registeration-success/registeration-success.component';


const routes: Routes = [ {
  path: '',
  children: [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'not-running', component: NotRunningComponent },
    { path: 'registration-successful', component: RegisterationSuccessComponent },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
