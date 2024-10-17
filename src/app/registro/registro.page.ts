import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  clave: String = ""
  sw: boolean = false

  contrasenaTipo: string = 'password';
  iconoContrasena: string = 'eye-off';

  confirmadorContrasenaTipo: string = 'password';
  confirmadorIconoContrasena: string = 'eye-off';

  mensajeError: boolean = false; // Estado para el mensaje de error

  usuario = {
    primerNombre: '',
    apellido: '',
    email: '',
    numeroTelefonico: '',
    metodoPago: '',
    aceptarTerminos: false,
    contrasena: '',
    confirmarContrasena: '',
  };

  constructor(private router: Router) { }

  irNoRegistrado() {
    this.router.navigate(['/no-registrado']);
  }

  irRegistrado(){
    this.router.navigate(['/registrado'])
  }

  irAdmin(){
    this.router.navigate(['/admin'])
  }

  irRegistro(){
    this.router.navigate(['/registro'])
  }

  ngOnInit() {
  }

  onRegister() {
    if (this.usuario.contrasena !== this.usuario.confirmarContrasena) {
      this.mensajeError = true;
      return;
    }

    if (this.usuario.aceptarTerminos) {
      console.log('Usuario registrado:', this.usuario);
      this.router.navigate(['/registrado'])
    } else {
      console.log('Debe aceptar los términos y condiciones');
      alert('Debe aceptar los términos y condiciones para poder registrarse')
    }
  }

  regresar(){
    this.router.navigate(['/home'])
  }

  terminosCondiciones(){
    this.router.navigate(['/no-registrado'])
  }

  verContrasena() {
    if (this.contrasenaTipo === 'password') {
      this.contrasenaTipo = 'text';
      this.iconoContrasena = 'eye';
    } else {
      this.contrasenaTipo = 'password';
      this.iconoContrasena = 'eye-off';
    }
  }

  verContrasenaConfirmada() {
    if (this.confirmadorContrasenaTipo === 'password') {
      this.confirmadorContrasenaTipo = 'text';
      this.confirmadorIconoContrasena = 'eye';
    } else {
      this.confirmadorContrasenaTipo = 'password';
      this.confirmadorIconoContrasena = 'eye-off';
    }
  }
}

