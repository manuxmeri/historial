import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarVisitaPage } from './agregar-visita.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarVisitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarVisitaPageRoutingModule {}
