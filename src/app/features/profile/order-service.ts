import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Order } from "../../models/order-model";
import { OrderResponse } from "../../models/order-response-model";

@Injectable({ providedIn: 'root' })
export class OrderService {
  private apiUrl = 'https://node-eemi.vercel.app/api/orders';

  http: HttpClient = inject(HttpClient);

  createOrder(items: string[]): Observable<OrderResponse> {
    return this.http.post<OrderResponse>(this.apiUrl, { items });
  }

  getMyOrders(): Observable<Order[]> {
    return this.http.get<{ items: Order[] }>(`${this.apiUrl}/me`).pipe(map(res => res.items));
  }
}
