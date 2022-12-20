import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  Orders: any;
  data:any;
  constructor(private route:Router,private foodobj:FoodserviceService) { }

  ngOnInit(): void {
  this.getOd();
  }

  getOd()
  {
    this.foodobj.getOd().subscribe((data:any)=>
    {
    console.log(data);
   this.Orders=data;
    });
    
  }
}
