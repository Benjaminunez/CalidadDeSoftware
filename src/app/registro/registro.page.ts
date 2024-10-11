import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario = {
    primerNombre: '',
    apellido: '',
    email: '',
    numeroTelefonico: '',
    metodoPago: '',
    aceptarTerminos: false,
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onRegister() {
    if (this.usuario.aceptarTerminos) {
      console.log('Usuario registrado:', this.usuario);
      this.router.navigate(['/registrado'])
    } else {
      console.log('Debe aceptar los términos y condiciones');
      alert('Debe aceptar los terminos y condiciones para poder Registrarse')
    }
  }

  regresar(){
    this.router.navigate(['/home'])
  }

  terminosCondiciones(){
    this.router.navigate(['/no-registrado'])
  }

}
