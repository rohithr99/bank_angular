import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient){ 

  }
  //api to register

    register(acno:any, username:any,passwd:any){
      const bodyData = {
        acno: acno,
        username,
        passwd : passwd
      }

      return this.http.post('http://localhost:8000/register',bodyData)
    }

    login(acno:any,passwd:any){
      const body = {
        acno,
        passwd
      }
      return this.http.post('http://localhost:8000/login',body)
    }

  
}
