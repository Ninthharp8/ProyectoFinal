import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './Componentes/login/login.component';
import { SignupComponent } from './Componentes/signup/signup.component';
const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent}
=======
import { PrincipalComponent } from './Componentes/principal/principal.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent}
>>>>>>> 94d101d132200586bb268c4041180f4979947d83
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
