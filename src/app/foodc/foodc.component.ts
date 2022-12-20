import { Component, OnInit } from '@angular/core';
import { Fc } from './fc';
import { FoodserviceService } from '../foodservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foodc',
  templateUrl: './foodc.component.html',
  styleUrls: ['./foodc.component.css']
})
export class FoodcComponent implements OnInit {
  Fc:any;
 Foodcategory : any;
  fc : Fc =  new Fc();
display: any;
data:any;



  foodCUpdate={
    fcid:"",
    fcname:"",

  }

  constructor(private route:Router,private foodobj:FoodserviceService)
   { }
   showForm =false;

  ngOnInit(): void {
    this.getFc();
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
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
    getFc()
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
        openForm(){
          this.showForm=true
        }

}

