import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'pacientes',
    pathMatch: 'full'
  },
  {
    path: 'pacientes',
    children: [
      {
        path: "",
    loadChildren: () => import('./pacientes/pacientes/pacientes.module').then( m => m.PacientesPageModule)
      },
      {
        path: ":pacienteId",
    loadChildren: () => import('./info-pacientes/info-pacientes/info-pacientes.module').then( m => m.InfoPacientesPageModule)
      },
      
      {
        path: ':pacienteId',
        loadChildren: () => import('./opciones/opciones/opciones.module').then( m => m.OpcionesPageModule)
      },
 

    ]
  },
  {
    path: 'medicamentos',
    children: [
      {
        path: "",
        loadChildren: () => import('./medicamentos/medicamentos/medicamentos.module').then( m => m.MedicamentosPageModule)
      },
      {
        path: ':medicamentoId',
        loadChildren: () => import('./info-medicamento/info-medicamento/info-medicamento.module').then( m => m.InfoMedicamentoPageModule)
      }
      

    ]
  },
  {
    path: 'recetas',
    children: [
      {
        path: "",
        loadChildren: () => import('./recetas/recetas/recetas.module').then( m => m.RecetasPageModule)
      },
      {
        path: ':recetaId',
        loadChildren: () => import('./editar-receta/editar-receta.module').then( m => m.EditarRecetaPageModule)
      },
      

    ]
  },
    
  
 
  {
    path: 'examenes',
    loadChildren: () => import('./examenes/examenes/examenes.module').then( m => m.ExamenesPageModule)
  },
  {
    path: 'visitas',
    loadChildren: () => import('./visitas/visitas/visitas.module').then( m => m.VisitasPageModule)
  },
  {
    path: 'info-pacientes/:id',
    loadChildren: () => import('./info-pacientes/info-pacientes/info-pacientes.module').then( m => m.InfoPacientesPageModule)
  },
  {
    path: 'agregar-paciente',
    loadChildren: () => import('./agregar-paciente/agregar-paciente/agregar-paciente.module').then( m => m.AgregarPacientePageModule)
  },
  {
    path: 'editar-paciente/:id',
    loadChildren: () => import('./editar-paciente/editar-paciente/editar-paciente.module').then( m => m.EditarPacientePageModule)
  },
  
  {
    path: 'fecha',
    loadChildren: () => import('./fecha/fecha/fecha.module').then( m => m.FechaPageModule)
  },
  {
    path: 'agregar-medicamento',
    loadChildren: () => import('./agregar-medicamento/agregar-medicamento/agregar-medicamento.module').then( m => m.AgregarMedicamentoPageModule)
  },
  {
    path: 'medicamento-editar',
    loadChildren: () => import('./medicamentos/medicamento-editar/medicamento-editar.module').then( m => m.MedicamentoEditarPageModule)
  },
  {
    path: 'info-medicamento/:id',
    loadChildren: () => import('./info-medicamento/info-medicamento/info-medicamento.module').then( m => m.InfoMedicamentoPageModule)
  },{
  path: 'opciones/:id',
        loadChildren: () => import('./opciones/opciones/opciones.module').then( m => m.OpcionesPageModule)
      },
  {
    path: 'agregar-visita',
    loadChildren: () => import('./agregar-visita/agregar-visita.module').then( m => m.AgregarVisitaPageModule)
  },
  {
    path: 'agregar-examen',
    loadChildren: () => import('./agregar-examen/agregar-examen.module').then( m => m.AgregarExamenPageModule)
  },
  {
    path: 'agregar-visitas',
    loadChildren: () => import('./agregar-visitas/agregar-visitas.module').then( m => m.AgregarVisitasPageModule)
  },
  {
    path: 'editar-visita/:id',
    loadChildren: () => import('./editar-visita/editar-visita.module').then( m => m.EditarVisitaPageModule)
  },
  {
    path: 'editar-receta/:id',
    loadChildren: () => import('./editar-receta/editar-receta.module').then( m => m.EditarRecetaPageModule)
  },
  {
    path: 'editar-examen/:id',
    loadChildren: () => import('./editar-examen/editar-examen.module').then( m => m.EditarExamenPageModule)
  },
  {
    path: 'agregar-receta/:id',
    loadChildren: () => import('./agregar-receta/agregar-receta.module').then( m => m.AgregarRecetaPageModule)
  },
 
 
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
