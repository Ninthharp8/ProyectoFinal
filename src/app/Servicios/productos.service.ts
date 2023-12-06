import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Producto } from '../Interfaces/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private apiUrl = 'https://tu-backend.com/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Producto[]> {
    // Descomenta esta línea cuando tengas el backend listo
    // return this.http.get<Producto[]>(this.apiUrl);

    // Ejemplo mientras configuras el backend
    return of([
      { name: 'Prenda 1', price: 400.00, image: '../../../assets/p1.jpg' },
      { name: 'Prenda 2', price: 400.00, image: '../../../assets/p2.jpg' },
      { name: 'Prenda 3', price: 400.00, image: '../../../assets/p3.jpg' },
      { name: 'Prenda 4', price: 400.00, image: '../../../assets/camisa.png' },
      {name: 'Prenda 5',price: 400.00, image: 'https://m.media-amazon.com/images/I/61qfmFBCaLL._AC_SX679_.jpg'},
    ]);
  }
}
