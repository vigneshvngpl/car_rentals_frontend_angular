import { Component } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { DataService } from '../Service/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent {

  id: any
  details: any
  temp: any = ''
  temp1: any = ''
  difference: any
  carimage: any
  carname: any
  dates1:any


  constructor(private router: Router, private ds: DataService, private ar: ActivatedRoute, private fb: FormBuilder,private dp:DatePipe) { }

  ngOnInit(): void {

    this.ar.params.subscribe((result: any) => {
      this.id = result.id
      
    })

    this.ds.reserveApi(this.id).subscribe((data: any) => {
      this.details = data.message
     
      this.carimage = this.details.carimge
      this.carname = this.details.carnme



    })


  }

  // transaction() {
  //   this.router.navigateByUrl("transactions")
  // }

  reserveForm = this.fb.group({
    frmdate: ["", [Validators.required]],
    toDate: ["", [Validators.required]],
    nDays: ["", [Validators.required, Validators.pattern("[0-9]+")]],
    lNum: ["", [Validators.required, Validators.pattern("[A-Za-z0-9]+")]]

  })

  toreserve() {
    if (this.reserveForm.valid) {
      if (this.reserveForm.value.frmdate == this.reserveForm.value.toDate) {
        alert("from and to dates are same")
      }
      else {
        //to get dates in between
        this.getDatesBetween(`${this.reserveForm.value.frmdate}`, `${this.reserveForm.value.toDate}`)
        this.calculateDiff()
        localStorage.setItem("fromdate", `${this.reserveForm.value.frmdate}`)
        localStorage.setItem("todate", `${this.reserveForm.value.toDate}`)
       

        //api calling
        this.ds.transactionApi(this.id,this.dates1).subscribe((result:any)=>{
          alert(result.message)
          this.router.navigateByUrl(`transactions/${this.id}`)
        },result=>{
          alert(result.error.message)
        })
      }

    }
    else {
      alert("form not valid")
    }
  }

  //To get dates between 

  getDatesBetween(fromDate: string, toDate: string): string[] {

    const dates = [];
    const current = moment(fromDate);
    const end = moment(toDate);

    while (current <= end) {
      dates.push(current.format('YYYY-MM-DD'));
      current.add(1, 'days');
    }
    console.log(dates);
    localStorage.setItem("dates", `${dates}`)
    this.dates1=dates

    return dates;
  }
  //number of days calculation

  calculateDiff() {
    this.temp = (this.reserveForm.value.frmdate)
    this.temp1 = (this.reserveForm.value.toDate)
    let d2 = Date.parse(this.temp1);
    let d1 = Date.parse(this.temp); //time in milliseconds
    var timeDiff = d2 - d1;
    var diff = timeDiff / (1000 * 3600 * 24);
    this.difference = Math.floor(diff) + 1;
    console.log(this.difference);
    localStorage.setItem("days", this.difference)


  }

  checkavailable(){
    this.ds.transactionApi(this.id,this.dates1).subscribe((result:any)=>{
      alert(result.message)
    },result=>{
      alert(result.error.message)
    })
  }

  //to disable previous dates

  todayDate=this.dp.transform(new Date(), 'yyyy-MM-dd');
  



}


