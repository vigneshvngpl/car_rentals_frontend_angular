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

  reserveApi(id:any){
    return this.http.get("http://localhost:3000/reserve/"+id)
  }

  transactionApi(id:any){
    return this.http.get("http://localhost:3000/transaction/"+id)
  }
}
