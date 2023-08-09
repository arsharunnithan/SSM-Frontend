import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  newEmployee = new Employee();
  message='';

  constructor(private _service : RegistrationService, private _router : Router){}
ngOnInit(){}

registerEmployee(){
  this._service.registerEmployeeFromRemote(this.newEmployee).subscribe(
    data =>{
      console.log("response recieved");
      this._router.navigate([''])
    },
    error => {
      console.log("Exception occured");
      this.message=error.error;
    }
  )
}

}
