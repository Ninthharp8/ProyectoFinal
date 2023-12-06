import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { Producto } from 'src/app/Interfaces/producto';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-SingleProduct',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})


export class ProductosComponent implements OnInit {

  producto: Producto | undefined;
  mensajeConfirmacion: string = '';
  constructor(
    private route: ActivatedRoute,
    private productService: ProductosService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productName = params.get('name');
      this.productService.getProducts().subscribe(
        (productos) => {
          this.producto = productos.find(producto => producto.name === productName);
        },
        (error) => {
          console.error('Error al obtener detalles del producto:', error);
        }
      );
    });
  }

  addtocart(): void {
    if (this.producto) {
      this.cartService.addToCart(this.producto);
      this.mensajeConfirmacion = 'Producto agregado al carrito correctamente';
    }
  }

  
}
