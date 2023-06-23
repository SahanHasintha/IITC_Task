import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  receivedFilter : any = "All";
  products: any= [];
  initialProducts: any= [];
  loading: boolean = false;

  constructor(private productService: ProductService, private router: Router){
    
  }

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe((res: any) => {
      this.products = res
      this.initialProducts = res
      
    }, (error: any) => {
      console.log(error);
      
    })
    // this.http.get('https://localhost:7166/api/Products')
    //   .subscribe((response) => {
    //     console.log(response);
    //   }, (error) => {
    //     console.log(error);
    //   });
  }


  receiveFilter($event: string) {
    
    switch ($event) {
      case "Featured": {
        this.products = this.initialProducts;
        this.products = this.products.filter((p: any) => p.isFeatured == true );
        break;
      }
      case "Out Of Stock": {
        this.products = this.initialProducts;
        this.products = this.products.filter((p: any) => p.isOutOfStock == true );
        break;
      }
      case "Visible": {
        this.products = this.initialProducts;
        this.products = this.products.filter((p: any) => p.isVisible == true );
        break;
      }
      case "Not Visible": {
        this.products = this.initialProducts;
        this.products = this.products.filter((p: any) => p.isVisible == false );
        break;
      }
      default: {
        this.products = this.initialProducts;
        break;
      }
    }
    
  }

    load() {
        this.loading = true;
        this.router.navigate(['/products-add'])
        setTimeout(() => {
            this.loading = false
        }, 2000);
    }
}
