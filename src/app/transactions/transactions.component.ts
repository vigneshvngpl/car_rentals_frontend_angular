import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  id:any
  details:any
  numday:any
  totalprice:any
  carimage:any
  mileage:any
  transmission:any
  model:any
  fuel:any
  capacity:any
  condition:any
  carname:any

  constructor(private ar:ActivatedRoute,private ds:DataService){}

ngOnInit(): void {

  this.ar.params.subscribe((result: any) => {
    this.id = result.id
    console.log(this.id);
    })

    this.ds.reserveApi(this.id).subscribe((data: any) => {
      this.details = data.message
      console.log(this.details);
      this.numday=localStorage.getItem("days")
      this.totalprice=(this.numday*this.details.price)
      this.carimage=this.details.carimge
      this.mileage=this.details.mileage
      this.transmission=this.details.transmission
      this.model=this.details.model
      this.fuel=this.details.fuel
      this.mileage=this.details.mileage
      this.capacity=this.details.capacity
      this.condition=this.details.condition
      this.carname=this.details.carname

      



    })
  
}






}
