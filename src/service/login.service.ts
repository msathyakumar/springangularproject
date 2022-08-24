import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/model/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="http://localhost:9090";
  constructor(private http:HttpClient,private route:Router) { }

  dologin(credentials:User){
    console.log("get token");
    return this.http.post(`${this.url}/authenticate`,credentials,{responseType :"text" as 'json'});
    //return this.http.post(`${this.url}/authenticate`,credentials,{responseType: 'text' as 'json'});
    console.log("after");

  }
  loginUser(token:any,credentials:any)
  {
    localStorage.setItem('token',"Bearer "+token);
    localStorage.setItem('uname',credentials.userName);
    return true;
  }
  loginUserName()
  {
    return localStorage.getItem('uname');
  }

  isLoggedIn()
  {
      let token=localStorage.getItem('token');
      if(token==undefined||token==''||token==null)
      {
        return false;
      }else{

        return true;
      }
  }
  logout()
  {
    localStorage.removeItem('token');
    this.route.navigateByUrl("/login");
    return true;
  }

  getToken()
  {
    return localStorage.getItem('token');
  }
}
