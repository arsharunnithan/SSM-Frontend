import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Product } from '../product';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit  {
  product = new Product();
  constructor(private _route: Router,private _service: CrudServiceService) { }

  ngOnInit(): void {
  }

addProductformsubmit()
{
this._service.addProductToRemote(this.product).subscribe
(
  data =>{
    console.log("Data added successfully");
    this._route.navigate(['/product-list']);
  },
  error =>console.log("Error")
)
}


  gotolist() {
    this._route.navigate(['/product-list']);
  }
}
