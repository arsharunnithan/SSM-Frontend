import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditproductComponent } from './edit-product/edit-product.component';
import { ViewproductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'add-product',component:AddProductComponent},
  {path: 'edit-product/:id', component: EditproductComponent},
  {path: 'edit-product', component: EditproductComponent},
  {path: 'view-product', component: ViewproductComponent},
  {path: 'view-product/:id', component: ViewproductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
