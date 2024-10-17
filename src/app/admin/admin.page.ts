import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  

  constructor(private router: Router) { }


  ngOnInit() {
  }

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

  descargarArchivo() {
    const message = `# Reporte de Impacto Ambiental de Alimentos

## Introducción
Este documento presenta un análisis sobre el impacto ambiental promedio de diferentes tipos de alimentos, considerando factores como la huella de carbono, el uso de agua y la biodiversidad afectada.

## 1. Frutas y Verduras
- **Manzanas**
  - Huella de carbono: 0.4 kg CO2e/kg
  - Uso de agua: 560 L/kg
  - Biodiversidad afectada: Bajo

- **Tomates**
  - Huella de carbono: 0.3 kg CO2e/kg
  - Uso de agua: 480 L/kg
  - Biodiversidad afectada: Bajo

## 2. Granos
- **Arroz**
  - Huella de carbono: 2.7 kg CO2e/kg
  - Uso de agua: 2500 L/kg
  - Biodiversidad afectada: Alto

- **Trigo**
  - Huella de carbono: 0.6 kg CO2e/kg
  - Uso de agua: 1000 L/kg
  - Biodiversidad afectada: Medio

## 3. Productos Animales
- **Carne de res**
  - Huella de carbono: 27 kg CO2e/kg
  - Uso de agua: 15000 L/kg
  - Biodiversidad afectada: Muy alto

- **Pollo**
  - Huella de carbono: 6 kg CO2e/kg
  - Uso de agua: 4000 L/kg
  - Biodiversidad afectada: Medio

## 4. Conclusiones
El análisis muestra que los productos animales, especialmente la carne de res, tienen un impacto ambiental significativamente mayor en comparación con las frutas, verduras y granos. Promover una dieta basada en plantas puede contribuir a reducir la huella ecológica.

## Recomendaciones
- Fomentar el consumo de frutas y verduras de producción local.
- Reducir el consumo de carne, especialmente de res.
- Considerar métodos de producción sostenibles para todos los tipos de alimentos.

## Fuentes
- Informe sobre la huella de carbono de alimentos (2023).
- Estudio de impacto ambiental en la agricultura (2022).`;

    const blob = new Blob([message], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'Reporte_Impacto_Ambiental.txt';
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}

