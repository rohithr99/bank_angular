import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  acno:any;
  username:any;
  passwd:any;
  confpass:any;

  signup(){
  console.log(this.acno);
  console.log(this.username);
  console.log(this.passwd);
  console.log(this.confpass);
  
}
}
