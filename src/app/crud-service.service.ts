import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(private _http : HttpClient) { }

  // since response is in the form of Observable we need to subscribe it-ts file
  public fetchProductListFromRemote():Observable<any>{
    return this._http.get<any>("http://localhost:8090/getproductlist")
  }
  public addProductToRemote(product: Product):Observable<any>{
    return this._http.post<any>("http://localhost:8090/addproduct", product)
  }
  public fetchProductByIdFromRemote(id: number):Observable<any>{
    return this._http.get<any>("http://localhost:8090/getproductbyid/"+id)
  }
  public updateProductToRemote(product: Product): Observable<any>{
    return this._http.post<any>("http://localhost:8090/addproduct",product);
  }
  public deleteProductByIdFromRemote(id: number): Observable<any> {
    return this._http.delete<any>("http://localhost:8090/deleteproductbyid/" + id);
  }
}
