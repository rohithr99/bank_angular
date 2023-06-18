import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  pswCheck:boolean = false;

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) {

  }

  registerForm = this.fb.group({
    acno: ['',[Validators.required, Validators.pattern('[0-9]+')]],
    username: ['',[Validators.required, Validators.pattern('[a-zA-Z]+')]],
    passwd: ['',[Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    confirmPass: ['',[Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })

  signup() {

    var path = this.registerForm.value;


    if (this.registerForm.valid) {
      if (path.passwd == path.confirmPass) {
        this.ds.register(path.acno, path.username, path.passwd).subscribe((result: any) => {
          alert(result.message);
          this.router.navigateByUrl('');
        },
          result => {
            alert(result.error.message);
          }
        )
      }
      else {
        this.pswCheck = true;
        // alert("password doesn't match");
      }
    }
    else{
      alert('Invalid Form');
    }

  }
}