import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { SignupComponent } from './Componentes/signup/signup.component';
import { PrincipalComponent } from './Componentes/principal/principal.component';
import { ProductosComponent } from './Componentes/productos/productos.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { PaginacionComponent } from './Componentes/paginacion/paginacion.component';
import { CarritoComponent } from './Componentes/carrito/carrito.component';
import { gracias } from './Componentes/thx/gracias';
import { Pagina2Component } from './Componentes/pagina2/pagina2.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PrincipalComponent,
    ProductosComponent,
    HeaderComponent,
    FooterComponent,
    PaginacionComponent,
    CarritoComponent,
    gracias,
    Pagina2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
