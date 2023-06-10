import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../Service/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent {

  id: any
  details:any
  

  constructor(private router: Router, private ds: DataService, private ar: ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit(): void {

    this.ar.params.subscribe((result: any) => {
      this.id = result.id
      console.log(this.id);

      this.ds.reserveApi(this.id).subscribe((data:any)=>{
        this.details=data.message
        console.log(this.details);
        

      })



    })

  }

  // transaction() {
  //   this.router.navigateByUrl("transactions")
  // }

  reserveForm=this.fb.group({
    frmdate:["",[Validators.required]],
    toDate:["",[Validators.required]],
    nDays:["",[Validators.required,Validators.pattern("[0-9]+")]],
    lNum:["",[Validators.required,Validators.pattern("[A-Za-z0-9]+")]]

  })

  toreserve(){
    if(this.reserveForm.valid){
      if(this.reserveForm.value.frmdate==this.reserveForm.value.toDate){
alert("from and to dates are same")
      }
      else{
        this.router.navigateByUrl("transactions")
      }

    }
    else{
      alert("form not valid")
    }
  }



}


