import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoMedicamentoPage } from './info-medicamento.page';

const routes: Routes = [
  {
    path: '',
    component: InfoMedicamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoMedicamentoPageRoutingModule {}
