import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


//overloaded header
const options = {
  headers : new HttpHeaders()
}


@Injectable({
  providedIn: 'root'
})



export class DataService {

  constructor(private http:HttpClient){ 

  }


  getHeader(){
    //header
    let headers = new HttpHeaders(); 
    // must use name as "headers" ---imp

    //add token -append
    let token = JSON.parse(localStorage.getItem("token") || "");
    headers.append("access_token",token);
    //to add token to the heaader object append is used
    
    //store the header in option object as header keys value
    options.headers = headers.append("access_token", token); 

    //return
    return options;
  }

  //api to register

    register(acno:any, username:any,passwd:any){
      const bodyData = {
        acno: acno,
        username,
        passwd : passwd
      }

      return this.http.post('http://localhost:8000/register',bodyData);
    }

    login(acno:any,passwd:any){
      const body = {
        acno,
        passwd
      }
      return this.http.post('http://localhost:8000/login',body);
    }

    //api to get single user data
    getUser(acno:any){
      //api requests as params
      return this.http.get('http://localhost:8000/getuser/'+acno,this.getHeader());

      //if more than one content we have to request then we should do post 
    }

    //for balance enquiry
    userBal(acno: any){
      return this.http.get('http://localhost:8000/userbalance/'+acno,this.getHeader());
    }
  
    moneyTransfer(toAcno:any,fromAcno: any,amount: any,passwd:any,date: any){
      const body ={
        toAcno,
        fromAcno,
        amount,
        passwd,
        date
      }
      return this.http.post('http://localhost:8000/transfer',body,this.getHeader());
    }

    //api to get transaction history array
    getTransaction(acno : any){
      return this.http.get('http://localhost:8000/history/'+acno,this.getHeader());
    }


    //api to delete account
    deleteAcc(acno:any){
      return this.http.delete('http://localhost:8000/delete/'+acno,this.getHeader());
    }
}
