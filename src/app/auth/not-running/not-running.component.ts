import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-running',
  templateUrl: './not-running.component.html',
  styleUrls: ['./not-running.component.scss']
})
export class NotRunningComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl('login');
  }

}
