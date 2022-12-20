import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Food } from '../food/food';
import { FoodserviceService } from '../foodservice.service';
import* as toastr from 'toastr';
import { Order } from '../order';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Food: any;
food: any;
searchfor:any;
uid:any;
fid:any;
carts:any;
fname:any;
orders:any;
  constructor(private route:Router,private foodobj:FoodserviceService,private cartService:CartService,private router:ActivatedRoute,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getFood();
    this.uid=this.router.snapshot.params['uid'];
    console.log(this.uid);
  }
  

  getFood()
{
  this.foodobj.getAllFood().subscribe((data:any)=>
  {
  console.log(data);
  this.Food=data;
  });
}
addTOCart(fid: any) {
  console.log(fid);
  this.cartService.addToCart(this.uid,fid,this.fname).subscribe((data:any)=>
  {
    this.carts=data;
   } );
  // window.alert('Your product has been added to the cart!');
 
  this.httpClient.get<any>("http://localhost:4200/order/orders").subscribe((data:any)=>
{
const user = data.find((a:any)=>{
  return a.uid === this.uid;
});
if(user){
console.log(this.orders);
}
}
);
}
search(){

}
showToastr(){
  toastr.success("Added to Cart!");
}
}


