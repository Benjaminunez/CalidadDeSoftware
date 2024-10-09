import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoRegistradoPage } from './no-registrado.page';

const routes: Routes = [
  {
    path: '',
    component: NoRegistradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoRegistradoPageRoutingModule {}
