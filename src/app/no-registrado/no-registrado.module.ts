import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoRegistradoPageRoutingModule } from './no-registrado-routing.module';

import { NoRegistradoPage } from './no-registrado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoRegistradoPageRoutingModule
  ],
  declarations: [NoRegistradoPage]
})
export class NoRegistradoPageModule {}
