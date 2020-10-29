import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  constructor(private service:ShareService, private router:Router) { }
  loan;
  loans;
  name;
  email;
  mobile;
  address;
  start;
  monthly;
  end;
  getLoan(){
    this.service.getLoan().subscribe( (data)=>{
      this.loan = data;
      this.loans = this.loan.data.tours;
      
    })
  }

  createLoan(){
    var obj={loan_application_name: this.name,email: this.email, mobile_number:this.mobile,address: this.address, loan_start_date: this.start, loan_expiry_date: this.end, monthly_installments: this.monthly}
    this.service.createLoan(obj).subscribe( () =>{
      alert("Loan created Sucessfully");
      this.getLoan();
    }, (err)=>{
      console.log(err);
      
      alert("something went wrong")
    })
  }

  ngOnInit(): void {
    this.getLoan()
  }

  logout(){
    localStorage.removeItem('email');
    this.router.navigateByUrl('/login');

  }

}
