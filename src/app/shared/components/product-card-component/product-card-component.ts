import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { PricePipe } from "../../pipes/price-pipe-pipe";
import { Product } from "../../../models/product-model";
import { CartService } from "../../../features/cart/cart-service";
import { NgIf } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-product-card',
  templateUrl: './product-card-component.html',
  styleUrls: ['./product-card-component.css'],
  imports: [RouterLink, PricePipe]
})
export class ProductCardComponent {
  @Input() product!: Product;
   constructor(private cartService: CartService) {}

  addToCart() {
  if (!this.product.isAvailable) {
    return;
  }
  this.cartService.add(this.product);
}


}
