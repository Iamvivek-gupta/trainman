import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private http: HttpClient) { }


  getSignup(body){
    //console.log(body)
    return this.http.post('http://localhost:700/api/v1/users/signup', body)
  
  }


 

  getLogin(body){
    console.log(body)
    return this.http.post('http://localhost:700/api/v1/users/login', body)
  }

  getLoan(){
    //console.log(body)
    let email = localStorage.getItem('email');
    console.log(email);
    
    return this.http.get(`http://127.0.0.1:700/api/v1/loans/getLoan/${email}`)
  }

  createLoan(body){
    return this.http.post('http://127.0.0.1:700/api/v1/loans/createLoan', body)
  }
}
