import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {

  currentuser:any
  orderhistory:any

ngOnInit(): void {

  this.currentuser=localStorage.getItem("currentemail")
  this.ds.orderhistory(this.currentuser).subscribe((result:any)=>{
    this.orderhistory=result.message
    console.log(this.orderhistory);
    
  })
  
  
  
}
constructor( private ds:DataService){}



}
