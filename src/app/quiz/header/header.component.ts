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
    sessionStorage.clear();
    this.router.navigateByUrl('login');
}

}
