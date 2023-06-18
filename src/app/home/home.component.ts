import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  uname:any = "";
  acno:any;
  userData:any = {};
  balance:any;
  alertMessage:any="";
  alertColor:boolean = true;

  constructor(private ds: DataService,private router:Router,private fb:FormBuilder,private datePipe:DatePipe) {

  }

  ngOnInit(): void {
    if(!localStorage.getItem('currentAcno')){
      alert("Please login");
      this.router.navigateByUrl("");
    }

    if (localStorage.getItem('currentUser')) {
      this.uname = localStorage.getItem('currentUser');
      console.log(this.uname);

    }
  }

  //model form for transaction form
  transaction = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]+')]],
    passwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
  })


  accessUser(){

      if(localStorage.getItem('currentAcno')){
        this.acno = localStorage.getItem('currentAcno');
        console.log(this.acno);
      }
      this.ds.getUser(this.acno).subscribe((result: any) => {
        this.userData = result.message;
        console.log(this.userData);
        
      })
  }
  userBal(){

    if(localStorage.getItem('currentAcno')){
      this.acno = localStorage.getItem('currentAcno');
    }
    this.ds.userBal(this.acno).subscribe((result: any) => {
      this.balance = result.message;
    })
  }
  logout(){
    localStorage.removeItem('currentAcno');
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl("");
  }

  moneyTransferR(){
    if(this.transaction.valid){
      this.alertMessage = " ";
      var date = new Date();
      let latest_date = this.datePipe.transform(date,'short');
      //console.log(latest_date);

      if(localStorage.getItem("currentAcno")){
        this.acno = localStorage.getItem("currentAcno");
      }

      if(this.acno == this.transaction.value.acno){
        this.alertMessage = "failed due to sending to same account";
        this.alertColor = false;
      }else{
      this.ds.moneyTransfer(this.transaction.value.acno,
        this.acno,
        this.transaction.value.amount,
        this.transaction.value.passwd,
        latest_date).subscribe((result:any) =>{
          this.alertMessage = result.message;
          this.alertColor = true;
        },
        result =>{
          this.alertMessage = result.error.message;
          this.alertColor = false;
        }
        )
      }
    }else{
      this.alertMessage = "invalid form";
      this.alertColor = false;
    }
  }

}
