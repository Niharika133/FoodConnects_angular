import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  User : any;

  constructor(private route:Router,private foodobj:FoodserviceService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser()
  {
    this.foodobj.getUser().subscribe((data:any)=>
    {
    console.log(data);
   this.User=data;
    });
  }

}
