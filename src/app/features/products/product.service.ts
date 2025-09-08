import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Product } from "../../models/product-model";

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = 'https://node-eemi.vercel.app/api/products';

  http: HttpClient = inject(HttpClient);

  getAll(): Observable<Product[]> {
    return this.http.get<{ items: Product[] }>(this.apiUrl).pipe(map(res => res.items));
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
