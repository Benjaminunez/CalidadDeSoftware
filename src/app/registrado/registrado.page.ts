import { Component, OnInit } from '@angular/core';

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
    'carne': 0.027,
    'pollo': 0.0069,
    'arroz': 0.0045,
    'manzana': 0.0003,
  };

  calcularAlimentos() {
    if (this.alimentosData[this.foodItem.toLowerCase()]) {
      this.mostrarAlimentos = this.alimentosData[this.foodItem.toLowerCase()] * this.quantity;
    } else {
      this.mostrarAlimentos = null;
      alert('Alimento no encontrado en la base de datos');
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
