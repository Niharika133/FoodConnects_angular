import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  constructor(private httpClient:HttpClient) { 
  }

getAllFood()
  {
    return this.httpClient.get('/display/food');
  }

  addfood(data:any){

    return this.httpClient.post('/display/addfood/',data);
  }

  addUser(data:any)
  {
    return this.httpClient.post('/display/adduser/',data);
  }
  deleteFood(id:number)
  {
    return this.httpClient.delete('/display/deletefood/'+id);
  }
  getUser()
  {
    return this.httpClient.get('/display/user');

  }
  getFc()
  {
    return this.httpClient.get('/display1/fc');

  }
  addFc(data:any){
    return this.httpClient.post('/display1/addfc/',data);

  }
  deleteFoodC(id:number)
  {
    return this.httpClient.delete('/display1/deletefc/'+id);
  }
  getOd()
  {
    return this.httpClient.get('/order/orders/');

  }
  update(data:any)
  {
    return this.httpClient.put('/display/updatefood/',data);
  }

  update1(data:any)
  {
    return this.httpClient.put('/display1/updatefc/',data);
  }
  add(data:any){
    return this.httpClient.post('/display/addfood/',data);
  }
//  search(data:any){
//   return this.httpClient.get('/display/search/name/', data);
//  }
getUserById(data:any){
     return this.httpClient.get('/order/getuser/uid/', data);
   }


}
