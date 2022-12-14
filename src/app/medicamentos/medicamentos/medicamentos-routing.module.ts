import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentosPage } from './medicamentos.page';

const routes: Routes = [
  {
    path: '',
    component: MedicamentosPage
  },
  {
    path: 'medicamento-editar/:id',
    loadChildren: () => import('../medicamento-editar/medicamento-editar.module').then( m => m.MedicamentoEditarPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicamentosPageRoutingModule {}
