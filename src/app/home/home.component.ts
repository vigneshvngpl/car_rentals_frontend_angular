import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user: any
  carrid: any
  usenme: any
  cardetails: any
  seperateDetails: any
  carname: any
  carmodel: any
  carfuel: any
  cartransmission: any
  carcondition: any
  carcapacity: any
  carmileage: any
  carprice: any
  carimage: any
  pp:any = "1"
  reserveerror:any=false
  loginerror:any




  constructor(private router: Router, private fb: FormBuilder, private db: DataService) { }

  ngOnInit(): void {

    this.usenme = localStorage.getItem("currentUser")

    this.viewall()

    
  
      // this.seperateDetails = this.cardetails.filter((item: any) => item.carid == 1)
      // console.log(this.seperateDetails);
  
      // this.carname = this.seperateDetails[0].carnme
      // this.carmodel = this.seperateDetails[0].model
      // this.cartransmission = this.seperateDetails[0].transmission
      // this.carcondition = this.seperateDetails[0].condition
      // this.carcapacity = this.seperateDetails[0].capacity
      // this.carmileage = this.seperateDetails[0].mileage
      // this.carprice = this.seperateDetails[0].price
      // this.carimage = this.seperateDetails[0].carimge
      // this.carfuel = this.seperateDetails[0].fuel
      // this.carrid = this.seperateDetails[0].carid
  

  }


  loginForm = this.fb.group({

    email: ["", [Validators.required, Validators.email]],
    psw: ["", [Validators.required, Validators.pattern("[0-9a-zA-Z]+")]]

  })

  registeruser() {
    this.router.navigateByUrl("register")
  }

  //login

  login() {
    if (this.loginForm.valid) {

      this.db.loginApi(
        this.loginForm.value.email,
        this.loginForm.value.psw
      ).subscribe((result: any) => {

        // alert("login successful")
        // this.usenme = localStorage.getItem("currentUser")




        localStorage.setItem("currentUser", result.currentUser)
        localStorage.setItem("currentemail", result.currentemail)
        this.router.navigateByUrl('login')


      },
        result => {
          alert(result.error.message)
          this.loginerror=result.error.message
        })


    }
    else {
      alert("form invalid")
    }
  }

  logout() {
    localStorage.removeItem("currentUser")
    this.router.navigateByUrl('login')
  }

  reservepge() {
    this.user = localStorage.getItem("currentUser")
    if (this.user) {
      this.router.navigateByUrl(`reserve/${this.carrid}`)

    }
    else {
      // alert("please Login")
      this.reserveerror=true
    }

  }

  //view all cars

  viewall() {
    this.db.viewallApi().subscribe((result: any) => {


      this.cardetails = result.message
      // console.log(this.cardetails);
      

    })
  }
  view(id:any ) {

    this.seperateDetails = this.cardetails.filter((item: any) => item.carid == id)
    console.log(this.seperateDetails);

    this.carname = this.seperateDetails[0].carnme
    this.carmodel = this.seperateDetails[0].model
    this.cartransmission = this.seperateDetails[0].transmission
    this.carcondition = this.seperateDetails[0].condition
    this.carcapacity = this.seperateDetails[0].capacity
    this.carmileage = this.seperateDetails[0].mileage
    this.carprice = this.seperateDetails[0].price
    this.carimage = this.seperateDetails[0].carimge
    this.carfuel = this.seperateDetails[0].fuel
    this.carrid = this.seperateDetails[0].carid

  }

  orders() {
    this.router.navigateByUrl("orders")
  }

  adminlogin(){
    this.router.navigateByUrl("adminlogin")
  }


}

