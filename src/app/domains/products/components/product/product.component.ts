import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe],
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
