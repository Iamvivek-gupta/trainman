import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:ShareService, private router:Router) { }


email: any;
password: any;
confirmPassword: any;
status :any;
  ngOnInit(): void {
  }


  signup(){
    var data = [{email: this.email,password: this.password, confirmPassword: this.confirmPassword}];
    this.service.getSignup(data).subscribe(dt =>{
      this.status = dt;
      alert(this.status.status)
      this.router.navigateByUrl('/login');
    })
    
  }

}
