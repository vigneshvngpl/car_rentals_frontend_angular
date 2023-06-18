import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../Service/data.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  adminerror:any
  forminvalid:any=false

  constructor(private fb:FormBuilder,private ds:DataService,private router:Router){}





  adminloginForm = this.fb.group({
    user: ["", [Validators.required, Validators.email]],
    
    psw: ["", [Validators.required, Validators.pattern("[0-9a-zA-Z]+")]]
    
  })

  adminlogin(){
    if(this.adminloginForm.valid){

      this.ds.adminloginApi(this.adminloginForm.value.user,this.adminloginForm.value.psw).subscribe((result:any)=>{
        // alert(result.message)
        this.router.navigateByUrl("adminhome")

      },result=>{
        // alert(result.error.message)
        this.adminerror=result.error.message
      })

    }
    else{
      // alert("form invalid")
      this.forminvalid=true
    }
  }

}
