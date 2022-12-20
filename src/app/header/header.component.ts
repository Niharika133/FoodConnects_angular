import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Food } from '../food/food';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   search:any;
  constructor(private router:Router,private foodobj:FoodserviceService,private route: ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {

    
  }
 
login()
{
this.router.navigate(['login']);
}
}