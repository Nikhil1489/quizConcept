import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  time: Date;

  constructor() {
    this.time = new Date();
  }

  ngOnInit(): void {

  }


}
