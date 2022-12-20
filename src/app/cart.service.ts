
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, VirtualTimeScheduler } from 'rxjs';
import { Food } from './food/food';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Food[] = [];
  cart:Order=new Order();
 constructor(private httpClient:HttpClient) { }
  
  addToCart(uid:any,fid:any,fname:any) {
    this.cart.oid=0;
    this.cart.fid=fid;
    this.cart.uid=uid;
    this.cart.fname=fname;
    // this.getCartItems(this.cart.uid).subscribe((data:any)=>
    // {
    //   this.cart=data;
    //   console.log(data);
    // })
   return this.httpClient.post("order/addorder",this.cart);
 }
    

 getItems() {
   return this.items;
  }

 clearCart() {
    this.items = [];
    return this.items;
  }
  getCartItems(data:any):Observable<Food[]>
  {
    return this.httpClient.get<Food[]>('/order/getuser/' + data);
  }
  deleteorder(fid:any,uid:any,position:any)
  {
    return this.httpClient.delete('/order/deleteorder/'+fid +"/" +uid +"/" +position );
  }
  iteamscount(){
    return this.items.length;
  }
  reduceQuantity(data:any){
    return this.httpClient.put('/order/reduceQuantity/',data);
  }
  increaseQuantity(data:any){
    return this.httpClient.put('/order/increaseQuantity/',data);

  }

usercart(uid:any){

  return this.httpClient.get('/order/usercart/' + uid);
}
 


  }
