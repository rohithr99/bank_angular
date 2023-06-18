import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder,FormsModule, Validators } from '@angular/forms';


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

  constructor(private rout:Router,private ds:DataService,private fb:FormBuilder){

  }
  ngOnInit():void{
    
  }

  //model2
  // loginFrm = this.fb.group({
  //   acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  //   passwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
  // })

  login(){

    //ngModel

    var acno = this.acno;
    var passwd = this.passwd;

    this.ds.login(acno,passwd).subscribe((result:any) => {
      localStorage.setItem('currentUser',result.currentUser);
      localStorage.setItem('currentAcno',result.currentAcno);
      localStorage.setItem('token',JSON.stringify(result.token)); 
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


  //model
  // loginForm=this.fb.group({
  //   acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  //   passwd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  // })

  
    // var acno = this.loginForm.value.acno;
    // var passwd = this.loginForm.value.passwd;


  // login(){

    // if(this.loginForm.valid){
    //   this.ds.login(acno,passwd).subscribe((result:any) => {

    //     localStorage.setItem('currentUser',result.currentUser);
    //     localStorage.setItem('currentAcno',result.currentAcno);
        
    //     alert(result.message);
    //     this.rout.navigateByUrl('home');
    //   },
    //   result => {
    //     alert(result.error.message);
    //     this.rout.navigateByUrl("");
    //   }
    //   )
    // }else{
    //   alert('invalid form');
    // }
    





