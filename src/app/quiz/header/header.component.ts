import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.length == 0)
    {
     this.router.navigateByUrl('login');
    }
  }

  logout(){
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('question_no');
    sessionStorage.removeItem('question_id');
    sessionStorage.removeItem('current_level');
    sessionStorage.removeItem('is_double');
    sessionStorage.removeItem('is_stage2started');
    this.router.navigateByUrl('login');
}

}
