import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarExamenPage } from './editar-examen.page';

const routes: Routes = [
  {
    path: '',
    component: EditarExamenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarExamenPageRoutingModule {}
