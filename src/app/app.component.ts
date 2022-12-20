import { Component } from '@angular/core';
import { LoginserviceService } from './loginservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Food';
  constructor(private loginservice:LoginserviceService){
    
  }
  getheader(){
    if(this.loginservice.getlogin()){
      return true;
    }
    else{
      return false;
    }
  }
  // gethome(){
  //   if(this.loginservice.getlogin()){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }
  getheader1(){
    if(this.loginservice.getlogin()){
      return true;
    }
    else{
      return false;
    }

  }
  getheader2(){
    if(this.loginservice.getadminlogin()===false && this.loginservice.getlogin()===false){
      return true;
    }
    return false;

  }
  getheader3(){
    if(this.loginservice.getadminlogin()){
      return true;
    }
    else{
      return false;
    }




  }

}
