import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


//global header for overload

// const options={
//   headers: new HttpHeaders
// }

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }






  registerApi(email: any, nme: any, phone: any, psw: any) {
    const body = {
      email,
      nme,
      phone,
      psw
    }

    return this.http.post("http://localhost:3000/register", body)
  }

  //login api

  loginApi(email: any, psw: any) {
    const body = {
      email,
      psw
    }
    return this.http.post("http://localhost:3000/login", body)

  }

  //view all cars

  viewallApi() {
    return this.http.get("http://localhost:3000/viewall")
  }

  //reserveapi

  reserveApi(id: any) {
    return this.http.get("http://localhost:3000/reserve/" + id)
  }

  orderhistory(id:any){
    return this.http.get("http://localhost:3000/orderhistory/"+id)
  }

  transactionApi(id: any, date: []) {
    const body = {
      id, date
    }
    return this.http.post("http://localhost:3000/transactions", body)
  }
  checkOutApi(id: any, dates: any, email: any, fromdate: any, todate: any, totalprice: any, carname: any, carimage: any,transmission:any,fuel:any,capacity:any,condition:any) {
    const body = {
      id,
      dates,
      email,
      fromdate,
      todate,
      totalprice,
      carname,
      carimage,
      transmission,
      fuel,
      capacity,
      condition

    }
    return this.http.post("http://localhost:3000/checkout", body)
  }

  //admin login api

  adminloginApi(user: any, psw: any) {
    const body = {
      user,
      psw
    }
    return this.http.post("http://localhost:3000/adminlogin", body)

  }

  //vehicle addition api

  
  vehicleadd(carid: any, carnme: any, model: any, price: any,carimge: any,fuel:any,transmission:any,capacity:any,mileage:any,condition:any) {
    const body = {
     carid,carnme,model,price,carimge,fuel,transmission,capacity,mileage,condition
    }

    return this.http.post("http://localhost:3000/addvehicle", body)
  }




 


}
