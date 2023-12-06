import { Injectable } from '@angular/core';

import { Observable, of,map } from 'rxjs';
import { Producto } from '../Interfaces/producto';


@Injectable({
  providedIn: 'root',
})
export class ProductosService {
 
  constructor() {}

  getProducts(): Observable<Producto[]> {
   
    return of([
      
      { name: ' Sudadera ', price: 615.40, image: 'https://m.media-amazon.com/images/I/41GvyP7fjbL._AC_SX679_.jpg',category: 'sudadera'},
      { name: ' Sudadera con capucha', price: 400.00, image: 'https://m.media-amazon.com/images/I/51DZOaaCS6L._AC_SX679_.jpg',category: 'sudadera' },
      { name: 'Sudadera roja', price: 613.91, image: 'https://m.media-amazon.com/images/I/71ptQOlbkfL._AC_SX679_.jpg' ,category: 'sudadera'},
      { name: 'Sudadera con capucha', price: 508.68, image: 'https://m.media-amazon.com/images/I/61MyDKvYY6L.AC_SX569.jpg', category: 'Sudadera'},
      {name: 'Prenda 5',price: 400.00, image: 'https://m.media-amazon.com/images/I/61qfmFBCaLL._AC_SX679_.jpg',category: 'blusa'},
      { name: 'Powerblend Sudadera', price: 602.43 , image: 'https://m.media-amazon.com/images/I/51UStNtA3RL._AC_SX569_.jpg',category: 'blusa' },
      { name: 'Chamarra con forro sherpa', price: 328.43, image: 'https://m.media-amazon.com/images/I/71B1s1-rNpL.AC_SY741.jpg', category: 'Chamarra'},
      { name: 'Pantalones ', price: 671.98, image: 'https://m.media-amazon.com/images/I/61rxOAIQETS._AC_SX300_SY300_QL70_ML2.jpg', category: 'Pantalon'},
      { name: 'Ryan Gosling Jacket', price: 1778.18, image: 'https://m.media-amazon.com/images/I/81wozkkO4rL.AC_SX679.jpg', category: 'Chamarra'},
     
    ]);
  }

  getProducts2(): Observable<Producto[]> {
   
    return of([
      { name: 'Prenda 1', price: 400.00, image: '../../../assets/p1.jpg',category: 'blusa'},
      { name: 'Prenda 2', price: 400.00, image: '../../../assets/p2.jpg',category: 'camisa' },
      { name: 'Prenda 3', price: 400.00, image: '../../../assets/p3.jpg' ,category: 'camisa'},
      { name: 'Sudadera con capucha', price: 508.68, image: 'https://m.media-amazon.com/images/I/61MyDKvYY6L.AC_SX569.jpg', category: 'Sudadera'},
      { name: 'Blusa', price: 528.85, image: 'https://m.media-amazon.com/images/I/61MBIZ9CThL.AC_SY879.jpg', category: 'Blusa'},
      { name: 'Sweater', price: 409.00, image: 'https://m.media-amazon.com/images/I/81hD4ipbu6L.AC_SY550.jpg', category: 'Sweater'},
      { name: 'Camisa de Oxford', price: 338.36, image: 'https://m.media-amazon.com/images/I/81QTqE5P1HL.AC_SX569.jpg', category: 'Camisa'},
      { name: 'Camisa de Franela', price: 688.11, image: 'https://m.media-amazon.com/images/I/81pFHnbiB-L._AC_SX300_SY300_QL70_ML2.jpg', category: 'Camisa'},
      { name: 'Blusa de algodon y lino', price: 46.85, image: 'https://m.media-amazon.com/images/I/51Av-Yf+3rL.AC_SX679.jpg', category: 'Blusa'},
    ]);
  }
  getProductsByCategory(category: string): Observable<Producto[]> {
    // Filtrar productos por categoría
    return this.getProducts().pipe(
      map(products => products.filter(product => product.category === category))
    );
  }
  

}

