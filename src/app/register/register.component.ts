import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

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

  constructor(private ds: DataService, private router:Router){

  }

  signup(){
  if(this.passwd == this.confpass){
    this.ds.register(this.acno,this.username,this.passwd).subscribe((result : any) => {
      alert(result.message);
      this.router.navigateByUrl('');
    },
    result => {
      alert(result.error.message);
    }
    );
  }
  else{
    alert("password doesn't match");
  }
}
}
