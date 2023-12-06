import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { SignupComponent } from './Componentes/signup/signup.component';
import { PrincipalComponent } from './Componentes/principal/principal.component';
import { ProductosComponent } from './Componentes/productos/productos.component';
import { CarritoComponent } from './Componentes/carrito/carrito.component';
import { gracias } from './Componentes/thx/gracias';
import { Pagina2Component } from './Componentes/pagina2/pagina2.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  { path: 'producto/:name', component: ProductosComponent},
  {path: 'carrito', component: CarritoComponent},
  {path:'gracias', component:gracias},
  {path:'pagina2', component:Pagina2Component},
  {path: '', component: PrincipalComponent}
]



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
  