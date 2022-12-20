import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { FoodserviceService } from '../foodservice.service';
import { User } from '../user';
import { Order } from '../order';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Food } from '../food/food';
import { LoginserviceService } from '../loginservice.service';
import { AnimateTimings } from '@angular/animations';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
items=this.cartService.getItems();
cart:any;
uid:any;
user:any;
orders:any;
ords:any;
a:any;
data:any;
fid:any;
position : any;
totalPrice: number =0;
totalQuantity: number = 0;
cartitems:Food[]=[];
ord:Order=new Order();
quantity1 : any;
notchanged:boolean=true;
ord1:Order[] = [];
// order1:Order=new Order();

// qt1:any;
// qt2:number=0;
 quantity:number = 0;

  constructor(private cartService:CartService,private foodobj:FoodserviceService,private route:Router,private router:ActivatedRoute,private httpClient:HttpClient,private loginservice:LoginserviceService) { }
  ngOnInit(): void {
    // this.uid= this.router.snapshot.paramMap.get('uid'); 
   this.uid= this.loginservice.getuid();
    this.getCartProducts();
    console.log(this.uid);
    this.getcartitems();
    
  
  }
    setCart(){
      //this.route.navigate(['cart',this.uid]);
      this.cart=this.cartService.getItems();
    
   }
   
  // addtocart1()
  // {
  //   this.httpClient.get<any>("http://localhost:4200/order/orders").subscribe((data:any)=>
  //   {
  //   const user = data.find((a:any)=>{
  //     return a.uid === this.uid;
  //   });
  //   if(user){
  //   console.log(this.orders);
  //   }
  // }
  //   );
  // }
  getCartProducts(){
    this.cartService.getCartItems(this.uid).subscribe((data:any)=>
    {
      this.cartitems = data;
      console.log(data);
      this.cartitems.map((value:any)=> {  
        this.totalPrice=this.totalPrice + value.fprice *value.quantity;
      });
      // this.totalPrice=data;
      this.cartitems.map((value:any)=> {  
        this.totalQuantity=this.totalQuantity + value.quantity;
      });

     });
  }
  deleteorder(f: Food){
    this.position=this.cartitems.indexOf(f);
    this.cartService.deleteorder(f.fid,this.uid,this.position).subscribe((data:any)=>{
    this.cartitems=data;
          } );
          alert("item deleted");
          this.totalQuantity=this.totalQuantity-1;
          this.totalPrice=this.totalPrice-f.fprice;
        this.getcartitems();

  }
  checkout(){
    this.route.navigate(['billing',this.totalPrice]);
  }





add(f:Food){

   
 this.getCartProducts();
    
    

  }
delete1(f:Food){

    this.quantity=this.quantity-1;
  
      this.cartService.getCartItems(this.uid).subscribe((data:any)=>
      {
        this.cartitems = data;
        console.log(data);
        this.cartitems.map((value:any)=> { 
          this.totalPrice=this.totalPrice - value.fprice *value.quantity;
          this.totalQuantity=this.totalQuantity - value.quantity;
        });
      

  });
    }
    reduceQuantity(f:Food){
      this.ord.fid = f.fid;
      this.ord.uid = this.uid;
      this.cartService.reduceQuantity(this.ord).subscribe();
      if(this.notchanged === false){
        this.notchanged = true;
      }
      else{
        this.notchanged = false;
      }
      //this.notchanged = false;
      if(f.fprice){
        this.totalPrice = this.totalPrice - f.fprice;
        this.totalQuantity=this.totalQuantity-1;
      }
      this.getcartitems();
      this.getcartitems();

    }
   getcartitems(){
    this.cartService.usercart(this.uid).subscribe((data:any)=>
    {
         this.ord1=data;
         console.log(data);
    });
   }
   getQuantity(f:Food){
    this.position = this.CartPosition(f);
    //this.getUserCart();
    for(let i =0; i < this.ord1.length; i++){
      if(i === this.position){
        return this.ord1.at(i)?.quantity1;
      }
    }
    return 0;
  }
  CartPosition(f:Food){
    console.log(this.ord1);
    return this.cartitems.indexOf(f);
  }
  increaseQuantity(f:Food){
    this.ord.fid = f.fid;
    this.ord.uid = this.uid;
    this.cartService.increaseQuantity(this.ord).subscribe();
    if(this.notchanged === false){
      this.notchanged = true;
    }
    else{
      this.notchanged = false;
    }
    //this.notchanged = false;
    if(f.fprice){
      this.totalPrice = this.totalPrice + f.fprice;
      this.totalQuantity=this.totalQuantity+1;
    }
    this.getcartitems();
    this.getcartitems();
    
  }
  quantityUnchanged(){
    return this.notchanged;
  }



  
   
    }
    
  



