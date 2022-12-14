import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesPage } from './opciones.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recetas',
    pathMatch: 'full'
  },
  {
    path: '',
    component: OpcionesPage,
    children: [
      {
        path: '',
        children: [
        
          {
            path: 'medicamentos',
            loadChildren: () =>
              import('../../medicamentos/medicamentos/medicamentos.module').then(m => m.MedicamentosPageModule)
          },
          {
            path: '',
            children: [

          {
            path: 'recetas',
            loadChildren: () => import('../../recetas/recetas/recetas.module').then( m => m.RecetasPageModule)
          }]
          },
          
          {
            
              path: '',
              children: [
                {
            path: 'examenes',
            loadChildren: () => import('../../examenes/examenes/examenes.module').then( m => m.ExamenesPageModule)
             } ]
          },

          {
            path: '',
              children: [
                {
            path: 'visitas',
            loadChildren: () =>
              import('../../pacientes/visitas/visitas.module').then(m => m.VisitasPageModule)
          }
        ]
      }
      ,

          {
            path: '',
              children: [
                {
            path: 'agregar-visita',
            loadChildren: () =>
              import('../../agregar-visita/agregar-visita.module').then(m => m.AgregarVisitaPageModule)
          }
        ]
      }
      
    ]
  },
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesPageRoutingModule {}
