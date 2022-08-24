import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PensionerProcessService {



baseUrl="http://localhost:9084";
  
constructor(private http:HttpClient) { }

getPensionDetail(credentials:any)
{
  return this.http.post( `${this.baseUrl}/pensionDetail`,credentials);
}

processPension(credentials:any,token:any)
{
 
  const headers1 = new HttpHeaders().set("Authorization",token);
  console.log(token);
  return this.http.post(`${this.baseUrl}/processPension`,credentials,{headers:headers1});
}
}