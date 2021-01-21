import {Injectable} from '@angular/core';

export class Product {
  id: number
  title: string
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {id: 1, title: 'car', price: 100},
    {id: 2, title: 'door', price: 10}
  ]

  getAllProducts(): Product[] {
    return [...this.products]
  }

  getProductById(id: number): Product {
    return this.products.find(product => product.id === id)
  }
}
