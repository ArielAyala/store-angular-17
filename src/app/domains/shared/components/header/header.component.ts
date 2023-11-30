import { Component, Input, signal } from '@angular/core';
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


  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }
}
