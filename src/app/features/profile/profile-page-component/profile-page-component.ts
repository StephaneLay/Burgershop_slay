import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../core/auth/auth-service";
import { Router } from "@angular/router";
import { PricePipe } from "../../../shared/pipes/price-pipe-pipe";
import { NgFor, NgIf } from "@angular/common";
import { OrderService } from "../order-service";
import { Order } from "../../../models/order-model";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page-component.html',
  styleUrl: './profile-page-component.css',
  imports: [PricePipe, NgFor, NgIf]
})
export class ProfilePageComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.orderService.getMyOrders().subscribe(data => this.orders = data);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
