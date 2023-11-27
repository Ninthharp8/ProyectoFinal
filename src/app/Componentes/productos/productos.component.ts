import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { Producto } from 'src/app/Interfaces/producto';

@Component({
  selector: 'app-SingleProduct',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})


export class ProductosComponent implements OnInit {

  producto: Producto | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductosService
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

  
}
