import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';
import { User } from '../user';
import { FoodserviceService } from '../foodservice.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname : any;
  a:any;
  uid:any;
   pwd : any;
  upass:any;
  loginForm:FormGroup | any;
  username:any;
  password:any;
  name:any;
  Users : User[]=[];
  constructor(private route:Router,private httpClient:HttpClient,private loginservice:LoginserviceService,private foodobj:FoodserviceService) { }

  ngOnInit(): void {
     this.loginForm = new FormGroup({
       'username' : new FormControl(),
       'password': new FormControl()
      })
    this.getUser();
  
  }
  getUser()
  {
    this.foodobj.getUser().subscribe((data:any)=>
    {
    console.log(data);
   this.Users=data;
    });
  }

//   login(loginForm:any){
//     console.log("anything");
//     if(loginForm.name == "ADMIN" && loginForm.pwd == "ADMIN"){
//       alert("Welcome " + loginForm.name);
//       this.loginservice.setlogin();
//       this.route.navigate(['buttons']);
//     }
//     else{
//       let found :boolean= false;
//       for(let user of this.Users){
//         if(loginForm.name === user.uname && loginForm.pwd === user.upass){
//           found = true;
//           this.uid = user.uid;
//           this.loginservice.setlogin();
//           alert("User Logged In successfully");
//           this.route.navigate(['home',this.uid]);
//         }
//       }
//       if(found === false){
//         alert("Incorrect Login Credentials");
//  }
// }
// }

  
  login(loginForm:FormGroup)
{
  this.httpClient.get<any>("http://localhost:4200/display/user").subscribe((data:any)=>
  {
  const user = data.find((a:any)=>
  {
    return a.uname === this.loginForm.value.username && a.upass === this.loginForm.value.password
  });
  if(user)
  {
     let found :boolean= false;
    // for(let User of user){
    //   if(user.uname === this.loginForm.value.username && user.upass === this.loginForm.value.password){
      found = true;
       this.uid = user.uid;
     alert("Login successful");
  
    this.loginservice.setlogin();
    this.loginForm.reset();
    this.loginservice.setuid(this.uid);
    this.route.navigate(['home',this.uid]);

      }

  else
  {
  if (this.loginForm.value.username=="ADMIN" && this.loginForm.value.password=="ADMIN"){
  alert("welcome admin");
  // this.loginservice.setlogin();
  this.loginservice.setadminlogin();
  this.route.navigate(['buttons']); 
  }
  else{
    alert("user not found");
  }
  }
  }
  );

}




 }


    


