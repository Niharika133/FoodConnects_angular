import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  login:boolean=false;
  uid:any=0;
  adminlogin : boolean=false;
  constructor(private httpClient:HttpClient ) {
    this.login=false;
   }
   setlogin(){
    this.login=true;
   }
   getlogin(){
    return this.login;
   }
   getuid(){
   return this.uid;
   }
   setuid(uid:any){
    this.uid=uid;
    
   }
   setadminlogin(){
    this.adminlogin=true;
   }
   getadminlogin(){
    return this.adminlogin;
   }
  

}
