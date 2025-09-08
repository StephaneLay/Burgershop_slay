import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { PricePipe } from "../../pipes/price-pipe-pipe";
import { Product } from "../../../models/product-model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card-component.html',
  styleUrls: ['./product-card-component.css'],
  imports: [RouterLink, PricePipe]
})
export class ProductCardComponent {
  @Input() product!: Product;
}
