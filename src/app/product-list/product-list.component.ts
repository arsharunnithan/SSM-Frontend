import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  productList: Product[];
  
  constructor(private _service:CrudServiceService, private _router : Router, private cdRef: ChangeDetectorRef, private ngZone: NgZone) {}

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
    data => {
      if (data.message) {
        console.debug("Deleted successfully");
        this.productList = this.productList.filter(product => product.id !== id);
        this.ngZone.run(() => {
          this.cdRef.detectChanges();
        });
      } else {
        console.log("Deletion error:", data.error);
      }
    },
    error => {
      console.log("Error occurred:", error);
    }
  );
}
  signOut(){
    this._router.navigate([''])
  }
}
