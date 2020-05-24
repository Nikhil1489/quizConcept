import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { InstructionsComponent } from './instructions/instructions.component';
import { StartComponent } from './start/start.component';
import { QuestionComponent } from './question/question.component';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';
import {LocationStrategy, PathLocationStrategy, APP_BASE_HREF, HashLocationStrategy} from '@angular/common';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    InstructionsComponent,
    StartComponent,
    QuestionComponent,
    SuccessComponent,
    FailureComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
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
