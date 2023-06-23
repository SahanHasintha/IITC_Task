import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component'
import { HomeComponent } from './home/home.component'
import { ProductAddComponent } from './products/product-add/product-add.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products-add', component: ProductAddComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
