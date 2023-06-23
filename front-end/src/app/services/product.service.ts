import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): any {
    return this.http.get('https://localhost:7166/api/Products')
  }

  addProduct(product: any): any {
    return this.http.post('https://localhost:7166/api/Products', product)
  }
}
