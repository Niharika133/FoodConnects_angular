import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  constructor(private loginservice:LoginserviceService,private route:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.loginservice.adminlogin=false;
    this.route.navigate(['login']);
  }


}
