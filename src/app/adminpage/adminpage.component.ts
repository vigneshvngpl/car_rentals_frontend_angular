import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  collection: any

  constructor(private ds: DataService, private router: Router) { }

  ngOnInit(): void {


    this.ds.viewallApi().subscribe((result: any) => {
      this.collection = result.message
      
      
    }, result => {
      alert(result.error.message)
    })

  }

  vehicleaddpage(){
    this.router.navigateByUrl("vehicleadd")
  }

  vehicleedit(id:any){
    this.router.navigateByUrl(`vehicleedit/${id}`)
  }


  
  vehicledelete(id:any){

    this.ds.vehicledelete(id).subscribe((result:any)=>{

        alert(result.message)
        this.router.navigateByUrl("adminhome")

    },result=>{
      alert(result.error.message)
    })
  }

}
