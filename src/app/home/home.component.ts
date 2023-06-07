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

  usenme:any



  

  constructor(private router:Router,private fb:FormBuilder,private db:DataService){}

  ngOnInit(): void {
    
    this.usenme=localStorage.getItem("currentUser")

  }


  loginForm=this.fb.group({

    email:["",[Validators.required,Validators.email]],
    psw:["",[Validators.required,Validators.pattern("[0-9a-zA-Z]+")]]

  })

  registeruser(){
    this.router.navigateByUrl("register")
  }

  //login

  login(){
    if(this.loginForm.valid){

      this.db.loginApi(
        this.loginForm.value.email,
        this.loginForm.value.psw
      ).subscribe((result:any)=>{

        alert("login successful")
        this.usenme=localStorage.getItem("currentUser")
        console.log(this.usenme);
        
        

        localStorage.setItem("currentUser",result.currentUser)
         this.router.navigateByUrl('login')
        
        
      },
      result=>{
        alert(result.error.message)
      })


    }
    else{
      alert("form invalid")
    }
  }

  logout(){
    localStorage.removeItem("currentUser")
    this.router.navigateByUrl('')
  }

  reservepge(){
    this.router.navigateByUrl("reserve")
  }

  

}

