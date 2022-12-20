import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private route:Router,private loginservice:LoginserviceService) { }

  ngOnInit(): void {
  }
  logout(){
    this.loginservice.login=false;
    alert("logout successful");
    this.route.navigate(['login']);
    
  }

}
