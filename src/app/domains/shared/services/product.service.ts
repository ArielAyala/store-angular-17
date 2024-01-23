import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  constructor() { }

  getProducts(category_id?: string) {
    const url = new URL(this.apiUrl + 'products');
    if (category_id) {
      url.searchParams.set('categoryId', category_id);
    }
    return this.http.get<Product[]>(url.toString());
  }

  getProduct(id: string) {
    return this.http.get<Product>(this.apiUrl + `products/${id}`);
  }
}
