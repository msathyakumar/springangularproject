import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginservice:LoginService,private router:Router) { }
  loggedIn = false;
  ngOnInit(): void {
    this.loggedIn =  this.loginservice.isLoggedIn();
  }
  
  onlogout(){
    this.loginservice.logout();
  }

}
