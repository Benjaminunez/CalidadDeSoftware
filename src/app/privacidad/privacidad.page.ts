import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacidad',
  templateUrl: './privacidad.page.html',
  styleUrls: ['./privacidad.page.scss'],
})
export class PrivacidadPage implements OnInit {

  constructor(private router: Router) { }

  regresar(){
    this.router.navigate(['/home']);
  }

  irNoRegistrado() {
    this.router.navigate(['/no-registrado']);
  }

  irRegistrado(){
    this.router.navigate(['/registrado']);
  }

  irAdmin(){
    this.router.navigate(['/admin']);
  }

  irRegistro(){
    this.router.navigate(['/registro']);
  }

  ngOnInit() {
  }

}
