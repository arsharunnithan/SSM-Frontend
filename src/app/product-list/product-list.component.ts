import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  productList:any
  
  constructor(private _service:CrudServiceService, private _router : Router) {}

  ngOnInit(){

    this._service.fetchProductListFromRemote().subscribe(
      data=>{
      console.log("Response received")
        console.log(data)
        this.productList=data;

      },
      error=>console.log("Exception occured"),
      
    )
  }
  navigateToAddProduct(){
    this._router.navigate(['/add-product'])
  }
  goToUpdateProduct(id: number) {
    console.log("id: "+ id);
    this._router.navigate(['/edit-product', id]);
  }


  goToViewProduct(id: number){
    this._router.navigate(['/view-product', id]);

  }

  deleteProduct(id: number) {
  this._service.deleteProductByIdFromRemote(id).subscribe(
    data =>{
      console.debug("Deleted succesfully");
      this._router.navigate(['/product-list'])
    },
    error=> {console.log("Exception occured"); 
  }
   )
  }
  signOut(){
    this._router.navigate([''])
  }
}
