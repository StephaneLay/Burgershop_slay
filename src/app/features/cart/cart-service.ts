import { Injectable } from "@angular/core";
import { Product } from "../../models/product-model";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CartService {
  private itemsSubject = new BehaviorSubject<Product[]>([]);
  items$ = this.itemsSubject.asObservable();

  constructor() {
    const saved = localStorage.getItem('cart');
    if (saved) {
      this.itemsSubject.next(JSON.parse(saved));
    }
  }

  private save(items: Product[]) {
    localStorage.setItem('cart', JSON.stringify(items));
  }

  add(product: Product) {
    const current = this.itemsSubject.value;
    const updated = [...current, product];
    this.itemsSubject.next(updated);
    this.save(updated);
  }

  remove(productId: string) {
    const updated = this.itemsSubject.value.filter(item => item.id !== productId);
    this.itemsSubject.next(updated);
    this.save(updated);
  }

  getItems(): Product[] {
    return this.itemsSubject.value;
  }

  clear() {
    this.itemsSubject.next([]);
    this.save([]);
  }
}