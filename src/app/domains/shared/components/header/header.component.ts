import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input({required: true}) cart: Product[] = [];
  hideSideMenu = signal(true);
  total = signal(0);

  ngOnChanges(changes: SimpleChanges){
    const cart = changes['cart'];
    if (cart) {
      this.total.set(this.calculateTotal());
    }
  }

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

  calculateTotal(){
    return this.cart.reduce((total, product)=> total + product.price, 0)
  }
}
