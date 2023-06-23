import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  value: string | undefined;
  title: string = '';
  quantity: string = '';
  price: string = '';
  vendor: string = '';
  featured: boolean = false;
  visible: boolean = false;
  outOfStock: boolean = false;

  constructor(private productService: ProductService,  private router: Router){}

  onSubmit() {
    console.log(this.visible,this.featured,this.outOfStock);

        const product = {
      name: this.title,
      quantity: this.quantity,
      vendor: this.vendor,
      price: this.price,
      isVisible: this.visible,
      isFeatured: this.featured,
      isOutOfStock: this.outOfStock
    }
    this.productService.addProduct(product).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/products'])
    }, (err: Error) => {
      console.log(err);
    })
  }



  ngOnInit(): void {}
}
