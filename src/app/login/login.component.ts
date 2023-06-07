import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  data = "happy banking with us";
  pdata = "enter acc num";

  serviceData:any;

  acno:any;
  passwd:any;

  constructor(private rout:Router,private ds:DataService){

  }
  ngOnInit():void{
    
  }

  login(){
    var acno = this.acno;
    var passwd = this.passwd;

    this.ds.login(acno,passwd).subscribe((result:any) => {
      alert(result.message);
      this.rout.navigateByUrl('home');
    },
    result => {
      alert(result.error.message);
      this.rout.navigateByUrl("");
    }
    );
    
  }

}

