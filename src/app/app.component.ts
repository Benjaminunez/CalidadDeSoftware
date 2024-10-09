import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  foodItem: string = '';
  quantity: number = 0;
  carbonFootprint: number | null = null;

  constructor() {}

  foodCarbonData: { [key: string]: number } = {
    'carne': 0.027,
    'pollo': 0.0069,
    'arroz': 0.0045,
    'manzana': 0.0003,
  };

  calculateCarbonFootprint() {
    if (this.foodCarbonData[this.foodItem.toLowerCase()]) {
      this.carbonFootprint = this.foodCarbonData[this.foodItem.toLowerCase()] * this.quantity;
    } else {
      this.carbonFootprint = null;
      alert('Alimento no encontrado en la base de datos');
    }
  }
}
