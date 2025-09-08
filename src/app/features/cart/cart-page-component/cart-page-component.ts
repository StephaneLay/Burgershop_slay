import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart-service";
import { ProductService } from "../../products/product.service";
import { NgFor, NgIf } from "@angular/common";
import { PricePipe } from "../../../shared/pipes/price-pipe-pipe";
import { Product } from "../../../models/product-model";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page-component.html',
  styleUrls: ['./cart-page-component.css'],
  imports: [NgIf, PricePipe, NgFor]
})
export class CartPageComponent implements OnInit {
  items: Product[] = [];

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const ids = this.cartService.getItems();
    ids.forEach(id => {
      this.productService.getById(id).subscribe(p => this.items.push(p));
    });
  }

  confirmOrder() {
    // Redirection vers confirmation
  }
}
