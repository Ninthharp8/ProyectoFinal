import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { SignupComponent } from './Componentes/signup/signup.component';
import { PrincipalComponent } from './Componentes/principal/principal.component';
import { ProductosComponent } from './Componentes/productos/productos.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { PaginacionComponent } from './Componentes/paginacion/paginacion.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PrincipalComponent,
    ProductosComponent,
    HeaderComponent,
    FooterComponent,
    PaginacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
