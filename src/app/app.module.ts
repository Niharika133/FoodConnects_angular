import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FoodComponent } from './food/food.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FoodcComponent } from './foodc/foodc.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CartPageComponent } from './cart/cart-page.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginheaderComponent } from './loginheader/loginheader.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { PaymentComponent } from './payment/payment.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { DisplayComponent } from './display/display.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { BillingComponent } from './billing/billing.component';




// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    LoginComponent,
    AdminComponent,
    FoodComponent,
    ButtonsComponent,
    FoodcComponent,
    UserComponent,
    OrderComponent,
    HomeComponent,
    CartPageComponent,
    LogoutComponent,
    LoginheaderComponent,
    HomeheaderComponent,
    PaymentComponent,
    DisplayComponent,
    AdminheaderComponent,
    BillingComponent
  

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    GooglePayButtonModule
    

  ],
  providers: [CartPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

