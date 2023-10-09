import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { Producto } from 'src/app/Interfaces/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})


export class ProductosComponent implements OnInit {

  productos: Producto[]=[];

  constructor(private ProductsService: ProductosService){}

  ngOnInit() {
    this.ProductsService.getProductos().subscribe(productos => {
      this.productos = productos;});
  }






}
