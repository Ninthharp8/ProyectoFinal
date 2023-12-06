import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { Producto } from 'src/app/Interfaces/producto';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit {
  products: Producto[] = [];
  carrito: Producto[] = [];
  productoSeleccionado: Producto | undefined;

  constructor(private productService: ProductosService,
    private router:Router,
    private cartService:CartService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  addToCart(producto: Producto): void {
    this.cartService.addToCart(producto);
  }
  verDetalle(producto: Producto): void {
    this.router.navigate(['/producto', producto.name]);
  }
}
