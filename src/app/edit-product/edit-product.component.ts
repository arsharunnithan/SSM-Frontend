import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CrudServiceService } from '../crud-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditproductComponent implements OnInit {

  productToUpdate = new Product();

constructor(private _route: Router, private _service: CrudServiceService, private _activatedRoute: ActivatedRoute) { }

ngOnInit(): void {
  // When you get the "field" id from url as a parameter it will be in string format, you have to format it to "int" by parsing it.
  let idParam = this._activatedRoute.snapshot.paramMap.get('id');
  let id = idParam ? parseInt(idParam) : 0; // Default to 0 if idParam is null
  this._service.fetchProductByIdFromRemote(id).subscribe(
    data=> {
      console.log("Data fetched successfully");
      this.productToUpdate = data; 
      // This line allows us to update the view in a smooth way

    },
    error => console.log("Exception on fetching product by id to edit")
  )

}
updateProductformsubmit()
{
  this._service.updateProductToRemote(this.productToUpdate).subscribe
  (
    data =>{
      console.log("Data updated successfully");
      this._route.navigate(['/product-list']);
    },
    error =>console.log("Error")
  )
}
gotolist() {
  this._route.navigate(['/product-list']);
}
}
