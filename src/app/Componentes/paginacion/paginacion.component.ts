// paginacion.component.ts

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.css']
})
export class PaginacionComponent {
  @Output() cambioDePagina = new EventEmitter<number>();

  // Puedes agregar lógica adicional según sea necesario
  cambiarPagina(nuevaPagina: number): void {
    this.cambioDePagina.emit(nuevaPagina);
  }
}
