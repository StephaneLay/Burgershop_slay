import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../product.service";
import { CartService } from "../../cart/cart-service";
import { PricePipe } from "../../../shared/pipes/price-pipe-pipe";
import { Product } from "../../../models/product-model";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail-component.html',
  styleUrl: './product-detail-component.css',
  imports: [PricePipe]
})
export class ProductDetailComponent implements OnInit {
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getById(id).subscribe(p => this.product = p);
    }
  }

  addToCart() {
    this.cartService.add(this.product._id);
  }
}
