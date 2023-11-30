import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  constructor() {
    const initProduct: Product[] = [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 3000,
        image: 'https://picsum.photos/640/640?r=1',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 1000,
        image: 'https://picsum.photos/640/640?r=2',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 3',
        price: 800,
        image: 'https://picsum.photos/640/640?r=3',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 1500,
        image: 'https://picsum.photos/640/640?r=4',
        creationAt: new Date().toISOString()
      }
    ];

    this.products.set(initProduct);

  }

  addToCart(product: Product) {
    this.cart.update(prevState => [...prevState, product]);
  }

}
