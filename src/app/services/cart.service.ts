// cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartData: any = { data: [] }; // Inicializa los datos del carrito como un array vacío

  constructor() {}

  getCartData(): any {
    return this.cartData;
  }

  addToCart(product: any): void {
    // Implementa la lógica para agregar un producto al carrito
    const existingItem = this.cartData.data.find((item: any) => item.product.id === product.id);

    if (existingItem) {
      existingItem.numInCart++;
    } else {
      this.cartData.data.push({ product: product, numInCart: 1 });
    }
  }

  removeFromCart(cartItem: any): void {
    // Implementa la lógica para quitar un producto del carrito
    const index = this.cartData.data.indexOf(cartItem);

    if (index !== -1) {
      this.cartData.data.splice(index, 1);
    }
  }
}
