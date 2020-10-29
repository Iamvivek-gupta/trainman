import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private service:ShareService, private router:Router) { }
  ngOnInit(): void {
    var email = localStorage.getItem('email');
    console.log("email from login",email);
    
    if(email !== null){
      this.router.navigateByUrl('/loan');

    } else {
      this.router.navigateByUrl('/login');

    }
  }


  email: any;
  password: any;
  status: any;
  login(){
   var data = {email: this.email,password: this.password};
    //console.log(data);
   this.service.getLogin(data).subscribe(dt =>{
     
      this.status = dt;
      localStorage.setItem('email',this.email)
      alert(this.status.status)
      this.router.navigateByUrl('/loan');
    
     
    },
    err => {
      if(!status)
      console.log("err:", err);
      alert("You are not registered please sign up")
      alert(err.error.message)
      this.router.navigateByUrl('/signup');
    })
    
  }
}
