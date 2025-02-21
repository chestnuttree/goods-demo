import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent,ProductDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {}
