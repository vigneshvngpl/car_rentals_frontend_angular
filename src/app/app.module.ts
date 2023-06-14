import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from'@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReserveComponent } from './reserve/reserve.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { VehicleaddComponent } from './vehicleadd/vehicleadd.component';
import { AdmincareditComponent } from './admincaredit/admincaredit.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ReserveComponent,
    TransactionsComponent,
    CheckoutComponent,
    OrderpageComponent,
    AdminpageComponent,
    AdminloginComponent,
    VehicleaddComponent,
    AdmincareditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
