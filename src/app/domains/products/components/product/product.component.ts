import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Product } from '@shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, TimeAgoPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  // @Input({ required: true }) img: string = '';
  // @Input() price: number = 0;
  // @Input() title: string = '';

  @Input({required: true}) product!: Product;
  @Output() addToCart = new EventEmitter<Product>();


  addToCartHandler() {
    this.addToCart.emit(this.product);
  }
}
