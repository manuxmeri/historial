import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPacientesPage } from './info-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPacientesPageRoutingModule {}
