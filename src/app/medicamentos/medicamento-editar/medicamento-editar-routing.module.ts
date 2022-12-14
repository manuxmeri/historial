import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentoEditarPage } from './medicamento-editar.page';

const routes: Routes = [
  {
    path: '',
    component: MedicamentoEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicamentoEditarPageRoutingModule {}
