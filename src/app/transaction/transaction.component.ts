import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit{
  
  acno: any;
  transactions: any;
  
  constructor(private ds:DataService){

  }

  ngOnInit(): void {
    if(localStorage.getItem("currentAcno")){
      this.acno = localStorage.getItem("currentAcno");
      // console.log(this.acno);

      this.ds.getTransaction(this.acno).subscribe((result: any) => {
        this.transactions = result.message;
        console.log(this.transactions);
        
      })
      
    }
  }
}
