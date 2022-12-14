import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientesPage } from './pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: PacientesPage
  },
  
  {
    path: 'paciente-editar/:id',
    loadChildren: () => import('../paciente-editar/paciente-editar.module').then( m => m.PacienteEditarPageModule)
  },
  {
    path: 'visitas/:id',
    loadChildren: () => import('../visitas/visitas.module').then( m => m.VisitasPageModule)
  },
  {
    path: 'opciones/:id',
    loadChildren: () => import('../../opciones/opciones/opciones.module').then( m => m.OpcionesPageModule)
  },
  {
    path: 'examenes/:id',
    loadChildren: () => import('../../examenes/examenes/examenes.module').then( m => m.ExamenesPageModule)
  },
  {
    path: 'recetas/:id',
    loadChildren: () => import('../../recetas/recetas/recetas.module').then( m => m.RecetasPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientesPageRoutingModule {}
