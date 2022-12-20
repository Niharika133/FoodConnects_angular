import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor(private httpClient:HttpClient,private route:Router) { }

  ngOnInit(): void {
  }
 
  food()
  {
   this.route.navigate(['food']);
  }
  foodc()
  {
   this.route.navigate(['foodc']);
  }
  user()
  {
   this.route.navigate(['user']);
  }
  order()
  {
   this.route.navigate(['order']);
  }
}
