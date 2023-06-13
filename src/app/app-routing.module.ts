import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReserveComponent } from './reserve/reserve.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { VehicleaddComponent } from './vehicleadd/vehicleadd.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"reserve/:id",component:ReserveComponent},
  {path:"transactions/:id",component:TransactionsComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"orders",component:OrderpageComponent},
  {path:"adminhome",component:AdminpageComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"vehicleadd",component:VehicleaddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
