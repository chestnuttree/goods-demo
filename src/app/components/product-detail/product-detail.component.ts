import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.less',
  animations: [
    trigger('slideIn', [
      state('false', style({ transform: 'translateX(100%)' })),
      state('true', style({ transform: 'translateX(0)' })),
      transition('* <=> *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class ProductDetailComponent {
  product$ = this.productService.getSelectedProduct();

  constructor(private productService: ProductService) {}

  close(): void {
    this.productService.clearSelection();
  }
}
