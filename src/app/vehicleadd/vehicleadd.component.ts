import { Component } from '@angular/core';
import { DataService } from '../Service/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicleadd',
  templateUrl: './vehicleadd.component.html',
  styleUrls: ['./vehicleadd.component.css']
})
export class VehicleaddComponent {

  constructor(private ds:DataService,private fb:FormBuilder,private router:Router){}


  vehicleaddform = this.fb.group({
    carid: ["", [Validators.required, Validators.pattern("[0-9]+")]],
    carnme: ["", [Validators.required, Validators.pattern("[a-zA-Z]+")]],
    Modelyear: ["", [Validators.required, Validators.pattern("[0-9a-zA-Z]+")]],

    price: ["", [Validators.required, Validators.pattern("[0-9]+")]],
    carimge: ["", [Validators.required]],
    fuel: ["", [Validators.required, Validators.pattern("[0-9a-zA-Z]+")]],
    transmission: ["", [Validators.required, Validators.pattern("[0-9a-zA-Z]+")]],
    capacity: ["", [Validators.required, Validators.pattern("[0-9]+")]],
    mileage: ["", [Validators.required, Validators.pattern("[0-9]+")]],
    condition: ["", [Validators.required, Validators.pattern("[0-9a-zA-Z]+")]]

  })

  addvehicle(){
    this.ds.vehicleadd(this.vehicleaddform.value.carid,this.vehicleaddform.value.carnme,
      this.vehicleaddform.value.Modelyear,
      this.vehicleaddform.value.price,
      this.vehicleaddform.value.carimge,
      this.vehicleaddform.value.fuel,
      this.vehicleaddform.value.transmission,
      this.vehicleaddform.value.capacity,
      this.vehicleaddform.value.mileage,
      this.vehicleaddform.value.condition).subscribe((result:any)=>{
        alert(result.message)
        
        this.router.navigateByUrl("adminhome")
        
      },result=>{
        alert(result.error.message)
      })
  }



}
