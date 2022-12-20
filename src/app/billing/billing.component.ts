import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartPageComponent } from '../cart/cart-page.component';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  totalPrice:any;

  constructor(private routes:ActivatedRoute,private httpClient:HttpClient,private route:Router) { }

  ngOnInit(): void {
    this.totalPrice=this.routes.snapshot.paramMap.get('totalPrice');
  }


  payment(){
    alert("Total Payment:"+ this.totalPrice);
  this.route.navigate(['payment']);
    }
}
