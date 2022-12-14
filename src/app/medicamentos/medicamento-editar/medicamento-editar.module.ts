import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicamentoEditarPageRoutingModule } from './medicamento-editar-routing.module';

import { MedicamentoEditarPage } from './medicamento-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicamentoEditarPageRoutingModule
  ],
  declarations: [MedicamentoEditarPage]
})
export class MedicamentoEditarPageModule {}
