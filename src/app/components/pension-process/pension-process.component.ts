import { Component, OnInit } from '@angular/core';
import { PensionerProcessService } from 'src/service/pensioner-process.service';
import { LoginService } from 'src/service/login.service';
import { PensionOutput } from 'src/model/pension-output';
import { PensionDetail } from 'src/model/pension-detail';

@Component({
  selector: 'app-pension-process',
  templateUrl: './pension-process.component.html',
  styleUrls: ['./pension-process.component.css']
})
export class PensionProcessComponent implements OnInit {

  
  credentials={
    name:"",
    dateOfBirth:"",
    panNumber:"",
    aadhaarNumber:"",
    pensionType:""
  }
  result:any;

  pension:PensionOutput = new PensionOutput("","","") ;
  

  constructor(private pensionService:PensionerProcessService,private loginService:LoginService) {
    console.log(this.loginService.getToken())
   }

  ngOnInit(): void {
  }

  detailsuccess(pensiondetail:PensionOutput){
    this.pension = pensiondetail;
  }
  
  onSubmit()
  {
  

    this.pensionService.processPension(this.credentials,this.loginService.getToken()).subscribe(
      (pensiondetail:any)=>
      {
        this.pension=pensiondetail;
        this.detailsuccess(pensiondetail);
        console.log(this.pension);
        console.log("success");
      },
      (      error: any)=>

      {
        alert("invalid aadhaar id");
        console.log(this.credentials);
        console.log(error);  
      }
    );
      
  }
  resetdata(){
    this.pension =new PensionOutput("","","");
  }
  logoutUser(){
    this.loginService.logout();
    window.location.href="/login";
  }


}
