import { Product } from "./product-model";

export interface Order {
  _id: string;
  items: Product[];
  total: number;
  createdAt: string;
}
