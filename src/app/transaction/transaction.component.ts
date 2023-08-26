import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { jsPDF } from 'jspdf';
import  'jspdf-autotable' ;

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit{
  
  acno: any;
  transactions: any;
  date: any;
  searchString: string = '';
  
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
    // date pipe
    this.date =new Date();   
    console.log(this.date);
  }

  filterPipe(data : any){
    this.searchString = data;
  }

  exportPdf(){
    
    // object for jsPdf
    const pdf = new jsPDF();

    //set cols and rows
    let col = ['type','amount','date'];

    let row:any = [];

    //style
    pdf.setFontSize(16);
    pdf.text("Account Statement",15,10);
    //.text('headingName',X-axisValue,Y-axisValue)

    //content style
    pdf.setTextColor(99);
    pdf.setFontSize(12);

    //convert array of object into array of array
    var allitems = this.transactions;

    for(let i of allitems){
      let rowData = [i.type,i.amount,i.date];
      row.push(rowData);
    }

    //convert nested array into pdf 
    (pdf as any).autoTable(col,row,{startY:15});

    //open converted pdf in new tab
    pdf.output('dataurlnewwindow');

    //to download and save
    // pdf.save('accountStatement.pdf');
  }
}
