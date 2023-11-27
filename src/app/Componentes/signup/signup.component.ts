import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
nombre : string = '';
email : string = '';
password : string = '';

register() {
  // Aquí puedes manejar la lógica de registro, por ejemplo, llamando a tu servicio de registro
  console.log('Registro iniciado');
  console.log('Nombre:', this.nombre);
  console.log('Correo electrónico:', this.email);
  console.log('Contraseña:', this.password);
  // Aquí puedes agregar la lógica para enviar el formulario al backend
}

}
