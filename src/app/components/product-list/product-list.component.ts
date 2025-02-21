import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.less',
})
export class ProductListComponent {
  products$ = this.productService.getProducts();
  selectedId$ = this.productService.getSelectedProductId();

  constructor(private productService: ProductService) {}

  selectProduct(id: number): void {
    this.productService.selectProduct(id);
  }
}
