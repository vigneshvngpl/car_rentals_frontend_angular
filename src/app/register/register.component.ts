import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  pswCheck: any = false
  registererror:any

  constructor(private fb: FormBuilder, private router: Router,private ds:DataService) { }

  registerForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    nme: ["", [Validators.required, Validators.pattern("[a-zA-Z]+")]],
    phone: ["", [Validators.required, Validators.pattern("[0-9]{10}")]],

    psw: ["", [Validators.required, Validators.pattern("[0-9a-zA-Z]+")]],
    cpsw: ["", [Validators.required, Validators.pattern("[0-9a-zA-Z]+")]]
  })

  register() {

    if (this.registerForm.valid) {
      if (this.registerForm.value.psw == this.registerForm.value.cpsw) {
        this.ds.registerApi(
          this.registerForm.value.email,
          this.registerForm.value.nme,
          this.registerForm.value.phone,
          this.registerForm.value.psw

        ).subscribe((result:any)=>{
          alert(result.message)
          this.router.navigateByUrl("")
        },  result=>{
          // alert(result.error.message)
          this.registererror=result.error.message

        })
        

        

      }
      else {
        this.pswCheck = true
      }

    }
    else {
      alert("invalid Form")
    }

  }




}
