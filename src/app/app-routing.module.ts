import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FoodComponent } from './food/food.component';
import { FoodcComponent } from './foodc/foodc.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { CartPageComponent } from './cart/cart-page.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { PaymentComponent } from './payment/payment.component';
import { DisplayComponent } from './display/display.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { BillingComponent } from './billing/billing.component';


const routes: Routes = [

  {path:"",component:DisplayComponent},
  {path:"login",component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'header',component:HeaderComponent},
  {path:'food',component:FoodComponent},
  {path:'buttons',canActivate:[AuthGuard],component:ButtonsComponent},
  {path:'foodc',component:FoodcComponent},
  {path:'order',component:OrderComponent},
  {path:'user',component:UserComponent},
  {path:'home/:uid',canActivate:[AuthGuard],component:HomeComponent},
  {path:'cart',canActivate:[AuthGuard],component:CartPageComponent},
  {path:'logout',canActivate:[AuthGuard],component:LogoutComponent},
  {path:'loginheader',component:LoginComponent},
  {path:'payment',component:PaymentComponent},
  {path:'billing/:totalPrice',component:BillingComponent},
  {path:'adminheader',component:AdminheaderComponent,children:[
    {path:'buttons',canActivate:[AuthGuard],component:ButtonsComponent}
  ]}
  

  // {path:'homeheader',component:HomeheaderComponent}
  
  


  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  ButtonsComponent
]