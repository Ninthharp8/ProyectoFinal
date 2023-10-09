import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../Interfaces/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = 'URL_DE_TU_API';


  constructor(private http:HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }


  

}
