export interface Order {
  _id: string;
  items: string[]; // tableau d'IDs de produits
  total: number;
  createdAt: string;
}
