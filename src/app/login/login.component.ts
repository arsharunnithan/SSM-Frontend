import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
employee = new Employee();
message = '';
  constructor(private _serive : RegistrationService, private _router : Router){}

  ngOnInit(){}

  loginEmployee(){
    this._serive.loginEmployeeFromRemote(this.employee).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/loginSucess'])
      },
      error => {
        console.log("exception occured");
        this.message="Bad Credentials, please enter valid emailId and password "
      }
    )
  }
  gotoRegistration(){
    this._router.navigate(['/registration'])
  }

}
