import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrado',
  templateUrl: './registrado.page.html',
  styleUrls: ['./registrado.page.scss'],
})
export class RegistradoPage implements OnInit {
  foodItem: string = '';
  quantity: number = 0;
  mostrarAlimentos: number | null = null;

  alimentosData: { [key: string]: number } = {
    'pollo': 0.0069,
    'arroz': 0.0045,
    'manzana': 0.0003,
    'carne de res': 0.027,
    'cerdo': 0.0079,
    'cordero': 0.024,
    'pescado': 0.006,
    'queso': 0.0135,
    'leche': 0.0014,
  };

  alimentosList: string[] = Object.keys(this.alimentosData);

  calcularAlimentos() {
    if (this.alimentosData[this.foodItem.toLowerCase()]) {
      this.mostrarAlimentos = this.alimentosData[this.foodItem.toLowerCase()] * this.quantity;
    } else {
      this.mostrarAlimentos = null;
      alert('Por favor escoga un alimento dentro de nuestra base de datos!.');
    }
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  regresar(){
    this.router.navigate(['/home'])
  }

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

}
