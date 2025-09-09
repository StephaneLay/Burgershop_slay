import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { ProductCardComponent } from "../../../shared/components/product-card-component/product-card-component";
import { NgFor } from "@angular/common";
import { Product } from "../../../models/product-model";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  imports: [ProductCardComponent,NgFor,ProductCardComponent]
})
export class HomePageComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe(data => {
      this.products = data;
      
    });
  }
}
