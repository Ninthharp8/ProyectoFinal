
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { Producto } from 'src/app/Interfaces/producto';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component {
  products: Producto[] = [];
  carrito: Producto[] = [];
  productoSeleccionado: Producto | undefined;
  paginaActual:number = 1;
 

  constructor(
    private productService: ProductosService,
    private router:Router,
    private cartService:CartService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    // Utilizando tu método getProducts del servicio
    this.productService.getProducts2().subscribe(
      (data) => {
        // Lógica para obtener productos de la página actual (simulado)
        const productosPorPagina = this.obtenerProductosPorPagina(data, this.paginaActual);
        this.products = productosPorPagina;
        this.products.forEach(product => (product.mensajeConfirmacion = ''));
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  obtenerProductosPorPagina(productos: Producto[], pagina: number): Producto[] {
    
    return productos;
  }

  cambioDePagina(nuevaPagina: number) {
    this.paginaActual = nuevaPagina;
    this.cargarProductos();
  }

  addToCart(producto: Producto): void {
    this.cartService.addToCart(producto);
    producto.mensajeConfirmacion = 'Agregado al carrito';

    setTimeout(() => {
      producto.mensajeConfirmacion = '';
    }, 1000);
  }
  verDetalle(producto: Producto): void {
    this.router.navigate(['/producto', producto.name]);
  }

  cargarProductosPorCategoria(categoria: string): void {
    // Obtener productos de la categoría seleccionada
    this.productService.getProductsByCategory(categoria).subscribe(
      (productos) => {
        this.products = productos;
        // ... otras operaciones según tu código actual ...
      },
      (error) => {
        console.error('Error al obtener productos por categoría:', error);
      }
    );
  }
}
