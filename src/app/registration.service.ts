import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient) { }

  public loginEmployeeFromRemote(employee :Employee):Observable<any>{
    return this._http.post("http://localhost:8090/loginEmployee", employee)
  }
  public registerEmployeeFromRemote(newEmployee :Employee):Observable<any>{
    return this._http.post("http://localhost:8090/registerEmployee", newEmployee)
  }
}
