import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-registrado',
  templateUrl: './no-registrado.page.html',
  styleUrls: ['./no-registrado.page.scss'],
})
export class NoRegistradoPage implements OnInit {
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
  constructor(private router: Router) { }

  ngOnInit() {
  }

  regresar(){
    this.router.navigate(['/home'])
  }

}
