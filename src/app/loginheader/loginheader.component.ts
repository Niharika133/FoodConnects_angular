import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Food } from '../cart/food';
import { LoginserviceService } from '../loginservice.service';


@Component({
  selector: 'app-loginheader',
  templateUrl: './loginheader.component.html',
  styleUrls: ['./loginheader.component.css']
})
export class LoginheaderComponent implements OnInit {

  totalQuantity: number = 0;
  cartitems:Food[]=[];
  uid:any;
  constructor(private cartService:CartService,private loginservice:LoginserviceService) { }

  ngOnInit(): void {
    this.uid= this.loginservice.getuid();
    this.getcount();
  }
  getcount(){
   
    
    this.cartService.getCartItems(this.uid).subscribe((data:any)=>
    {
      this.cartitems = data;
      console.log(data);
      this.cartitems.map((value:any)=> {  
        this.totalQuantity=this.totalQuantity + value.quantity;
      });
      // this.totalQuantity=data;

    });
   
  }
}
