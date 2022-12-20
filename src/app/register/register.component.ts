import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodserviceService } from '../foodservice.service';
import { Register } from '../register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user :any;
  data:any;
  Register:any;
  register : Register = new Register();
  
  constructor(private route:Router,private foodobj:FoodserviceService,private fb: FormBuilder ) { }

  ngOnInit(): void {

    
  }
  registration(){
    alert("registration Successful");
    this.foodobj.addUser(this.register).subscribe(res=>{
   this.data = res;
   console.log(this.data);
    });
    }
 

  



}
