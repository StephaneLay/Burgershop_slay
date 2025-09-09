import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart-service";
import { Product } from "../../../models/product-model";
import { PricePipe } from "../../../shared/pipes/price-pipe-pipe";
import { NgFor, NgIf } from "@angular/common";
import { Router } from "@angular/router";
import { OrderService } from "../../profile/order-service";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page-component.html',
  styleUrls: ['./cart-page-component.css'],
  imports: [PricePipe, NgFor, NgIf]
})
export class CartPageComponent implements OnInit {
  items: Product[] = [];

  constructor(
    private cartService: CartService,
    private router: Router,
    private orderService: OrderService // <-- injecte le service
  ) {}

  ngOnInit() {
    this.cartService.items$.subscribe(items => {
      this.items = items;
    });
  }

  confirmOrder() {
    // Envoie la commande au backend
    const itemIds = this.items.map(item => item.id);
    this.orderService.createOrder(itemIds).subscribe({
      next: () => {
        this.cartService.clear();
        this.router.navigate(['/order-success']);
      },
      error: err => {
        // Gère l'erreur (affiche un message, etc.)
        console.error('Erreur lors de la commande:', err);
      }
    });
  }

  removeFromCart(id: string) {
    this.cartService.remove(id);
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}
