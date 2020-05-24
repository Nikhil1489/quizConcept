import { Component } from '@angular/core';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppComponent {
  title = 'Quiz Concept';
  constructor(private location: Location){

  }

}
