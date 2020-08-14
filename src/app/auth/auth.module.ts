import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotRunningComponent } from './not-running/not-running.component';
import { RegisterationSuccessComponent } from './registeration-success/registeration-success.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthComponent, NotRunningComponent, RegisterationSuccessComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
