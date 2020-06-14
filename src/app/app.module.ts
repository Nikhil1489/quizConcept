import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {LocationStrategy, APP_BASE_HREF, HashLocationStrategy} from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { QuizModule } from './quiz/quiz.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    QuizModule,
    AppRoutingModule,
    MaterialModule,
    RouterModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: APP_BASE_HREF, useValue: window['_app_base'] || '/' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
