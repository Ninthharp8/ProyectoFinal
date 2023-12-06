
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3636/api/auth';  // Reemplaza esto con la URL correcta de tu backend

  constructor(private http: HttpClient) { }

  register(nombre: string, email: string, password: string): Observable<any> {
    const data = { nombre, email, password };
    return this.http.post(`${this.apiUrl}/register`, data);
  }
}
