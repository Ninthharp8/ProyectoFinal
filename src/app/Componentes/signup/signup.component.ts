import { Component } from '@angular/core';
import { AuthService } from 'src/app/Servicios/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
nombre : string = '';
email : string = '';
password : string = '';

constructor(private authService: AuthService){}

register() {
  this.authService.register(this.nombre, this.email, this.password).subscribe(
    (response) => {
      console.log('Registro exitoso:', response);
      // Puedes redirigir al usuario a la página de inicio de sesión u otra página aquí
    },(error) => {
      console.error('Error durante el registro:', error);
      // Manejar el error y proporcionar retroalimentación al usuario si es necesario
    });
}

eng(){
  console.log('Registro exitoso');
  console.log('Nombre:', this.nombre);
  console.log('Correo electrónico:', this.email);
  console.log('Contraseña:', this.password);
  
  this.register();
}

}
