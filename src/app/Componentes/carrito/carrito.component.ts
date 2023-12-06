// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service'; 

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  cartData: any;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartData = this.cartService.getCartData();
  }

  decreaseQuantity(cartItem: any): void {
    if (cartItem.numInCart > 1) {
      cartItem.numInCart--;
    }
  }

  increaseQuantity(cartItem: any): void {
    if (cartItem.numInCart < cartItem.product.quantity) {
      cartItem.numInCart++;
    }
  }

  removeFromCart(cartItem: any): void {
    this.cartService.removeFromCart(cartItem);
    this.cartData = this.cartService.getCartData();
  }

  getCartTotal(): number {
    return this.cartData.data.reduce((total: number, cartItem: any) => {
      return total + cartItem.numInCart * cartItem.product.price;
    }, 0);
  }
}
