import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewproductComponent implements OnInit {

  product = new Product();
  constructor(private _route:Router, private _service: CrudServiceService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let idParam = this._activatedRoute.snapshot.paramMap.get('id');
    let id = idParam ? parseInt(idParam) : 0; // Default to 0 if idParam is null
    this._service.fetchProductByIdFromRemote(id).subscribe(
    data=>{
      console.log("data received");
      this.product = data;
    },
      error => console.log("Exception Occured")
    )
  }
  gotolist() {
    this._route.navigate(['/product-list']);
  }
}
