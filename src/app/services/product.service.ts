import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, switchMap, tap } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  // Stream emitting product list updates
  private products$ = new BehaviorSubject<Product[]>([]);

  // Maintains selected product ID with localStorage sync
  private selectedProductId$ = new BehaviorSubject<number | null>(
    parseInt(localStorage.getItem('selectedProductId') || '') || null
  );

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  getProducts(): Observable<Product[]> {
    return this.products$.asObservable();
  }

  getSelectedProductId(): Observable<number | null> {
    return this.selectedProductId$.asObservable();
  }

  getSelectedProduct(): Observable<Product | null> {
    return this.selectedProductId$.pipe(
      switchMap((id) =>
        id
          ? this.http.get<Product>(`https://fakestoreapi.com/products/${id}`)
          : of(null)
      )
    );
  }

  selectProduct(id: number): void {
    this.selectedProductId$.next(id);
    localStorage.setItem('selectedProductId', id.toString());
  }

  clearSelection(): void {
    this.selectedProductId$.next(null);
    localStorage.removeItem('selectedProductId');
  }

  private loadProducts(): void {
    this.http
      .get<Product[]>('https://fakestoreapi.com/products')
      .pipe(tap((products) => this.products$.next(products)))
      .subscribe();
  }
}
