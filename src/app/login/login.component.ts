import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data = "happy banking with us";
  pdata = "enter acc num";

  login(a : any){
    console.log(a.value); // template rendering variable example #pswd in html file
    
    alert("login clicked");
  }
  acnoChange(event : any){
    console.log(event.target.value);
    
  }
}
