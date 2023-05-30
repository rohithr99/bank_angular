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

  constructor(private rout:Router,private ds:DataService){

  }
  ngOnInit():void{
    this.serviceData = this.ds.sdata;
    console.log(this.serviceData);
    this.ds.smethod();
    
  }

  login(a : any){
    console.log(a.value); // template rendering variable example #pswd in html file
    
    alert("login clicked");
    this.rout.navigateByUrl('home');
  }
  acnoChange(event : any){
    console.log(event.target.value);
    
  }
}
