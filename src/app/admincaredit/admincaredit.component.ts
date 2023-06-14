import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-admincaredit',
  templateUrl: './admincaredit.component.html',
  styleUrls: ['./admincaredit.component.css']
})
export class AdmincareditComponent implements OnInit {

  id: any
  cardetails: any
  carnme: any
  carmodel: any
  price: any
  carimge: any
  fuel: any
  transmission: any
  capacity: any
  mileage: any
  condition: any
  constructor(private fb: FormBuilder, private router: Router, private ds: DataService, private ar: ActivatedRoute) { }


  ngOnInit(): void {

    this.ar.params.subscribe((result: any) => {
      this.id = result.id


    })

    this.seperatedata()




  }

  seperatedata() {
    this.ds.reserveApi(this.id).subscribe((result: any) => {

      this.cardetails = result.message

      this.carnme = this.cardetails.carnme
      this.carmodel = this.cardetails.model
      this.price = this.cardetails.price
      this.carimge = this.cardetails.carimge
      this.fuel = this.cardetails.fuel
      this.transmission = this.cardetails.transmission
      this.capacity = this.cardetails.capacity
      this.mileage = this.cardetails.mileage
      this.condition = this.cardetails.condition





    })
  }

  edit() {
    this.ds.vehicleedit(this.id, this.carnme,  
      this.carmodel, this.price, this.carimge, this.fuel, 
      this.transmission, this.capacity, this.mileage, 
      this.condition).subscribe((result:any)=>{

        alert(result.message)
        this.router.navigateByUrl("adminhome")

    },result=>{
      alert(result.error.message)
    })
  }


  cancel(){
    this.router.navigateByUrl("adminhome")
  }







}
