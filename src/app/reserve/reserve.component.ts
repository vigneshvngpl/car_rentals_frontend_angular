import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent {

  constructor(private router:Router){}

  transaction(){
    this.router.navigateByUrl("transactions")
  }



}
