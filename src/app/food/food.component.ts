import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fc } from '../foodc/fc';
import { FoodserviceService } from '../foodservice.service';
import { Food } from './food';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  User : any;
  Food:any;
  newFood : any;
  food : Food = new Food();
  data:any;
 Fc:any;
 Foodcategory : any;
  fc : Fc =  new Fc();
  Order: any;
  display:any;

  foodUpdate={
    fid:"",
    fname:"",
    fprice:"",
    fdesc:"",
    fcid:"",
    fimg:""
  }
  
  foodAdd={
    fid:"",
    fname:"",
    fprice:"",
    fdesc:"",
    fcid:"",
    fimg:""

  }
  
  
  foodCUpdate={
    fcid:"",
    fcname:"",

  }
  constructor(private route:Router,private foodobj:FoodserviceService,
    ) { }
  showForm:any;

  ngOnInit(): void {

    this.getFood();
    this.getUser();
    this.getFc();
    this.getOrders();

  }
getFood()
{
  this.foodobj.getAllFood().subscribe((data:any)=>
  {
  console.log(data);
  this.Food=data;
  });
    }
    openModal() {
      this.display = "block";
    }
    onCloseHandled() {
      this.display = "none";
    }
    updateFood(food:any) 
    {
  this.foodUpdate=food;
    }
    updateF()
    {
      this.foodobj.update(this.foodUpdate).subscribe((data:any)=>
      {
        console.log(data);
      });
    }
    addF()
    {
      this.foodobj.add(this.foodAdd).subscribe((data:any)=>
      {
        console.log(data);
      });
    }
    addFood(food:any) 
    {
  this.foodAdd=food;
    }

    updateFoodC(foodcateogy:any) 
    {
  this.foodCUpdate=foodcateogy;
    }
    updateFC()
    {
      this.foodobj.update1(this.foodCUpdate).subscribe((data:any)=>
      {
        console.log(data);
      });
    }
  
   addfood(){
     
     this.foodobj.addfood(this.food).subscribe(res=>{
    this.data = res;
    this.getFood();

     });
     }
  deletefood(id:number){

    this.foodobj.deleteFood(id).subscribe((data)=>{

   this.getFood();
   this.data=data;
          } );

  }
  getUser()
 {
   this.foodobj.getUser().subscribe((data:any)=>
   {
   console.log(data);
  this.User=data;
   });
} getFc()
 {
  this.foodobj.getFc().subscribe((data:any)=>
  {
  console.log(data);
  this.Foodcategory=data;
  });
}
addFoodC(){
  this.foodobj.addFc(this.fc).subscribe(res=>{
    this.data = res;
    this.getFc();

     });
     }
     deletefoodC(id:number){

      this.foodobj.deleteFoodC(id).subscribe((data:any)=>{
  
     this.getFc();
     this.data=data;
            
    } );
  
    }
    getOrders()
 {
  this.foodobj.getOd().subscribe((data:any)=>
  {
  console.log(data);
  this.Order=data;
  });
  

}
openForm(){
  this.showForm=true
}


}





