import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: string[] = [];

  add(productId: string) {
    this.items.push(productId);
  }

  remove(productId: string) {
    this.items = this.items.filter(id => id !== productId);
  }

  getItems(): string[] {
    return [...this.items];
  }

  clear() {
    this.items = [];
  }
}
