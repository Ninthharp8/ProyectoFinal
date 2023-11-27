import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = "";

  login(){
    // Aquí puedes manejar la lógica de inicio de sesión, por ejemplo, llamando a tu servicio de autenticación
    console.log('Inicio de sesión iniciado');
    console.log('Correo electrónico:', this.email);
    // Aquí puedes agregar la lógica para enviar el formulario al backend
  }

}
