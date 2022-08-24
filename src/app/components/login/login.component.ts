import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/service/login.service';

import { User } from 'src/model/user';
import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:LoginService,private router:Router) { }
  user:User = new User("","");
  cred = {
    userName :"",
    password : ""

  };
  ngOnInit(): void {
  }

  onclick(){
    console.log("submitted successfully");
  }
  onSubmit(){
    if(this.cred.userName!='' && this.cred.password!='')
    {
      console.log("login details submitted");
      console.log(this.cred);
      this.loginservice.dologin(this.cred).subscribe(
        (response:any)=>{
          console.log("assure");
          console.log(response);
          this.loginservice.loginUser(response,this.cred);  
          //window.location.href="/pensionerlist";
          //t//his.response_data = response;
          //console.log("pdata"+this.response_data+"pdata");

        
          console.log("login successful");
          console.log(this.loginservice.getToken());
          window.location.href="/home";
        },(error:any)=>{
          alert("invalid login details");
        }
        
        
        
        //error=>{
          //Swal.fire('Invalid!','Wrong username or password','error');     
        //}
        
        
      )

}else{
  console.error("invalid login details")
}

 

}}
