import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetasPage } from './recetas.page';

const routes: Routes = [
  {
    path: '',
    component: RecetasPage
  },
  {
    path: 'editar-paciente/:id',
    loadChildren: () => import('../../editar-visita/editar-visita.module').then( m => m.EditarVisitaPageModule)
  },
  {
    path: 'agregar-receta/:id',
    loadChildren: () => import('../../agregar-receta/agregar-receta.module').then( m => m.AgregarRecetaPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetasPageRoutingModule {}
