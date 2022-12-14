import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoMedicamentoPageRoutingModule } from './info-medicamento-routing.module';

import { InfoMedicamentoPage } from './info-medicamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoMedicamentoPageRoutingModule
  ],
  declarations: [InfoMedicamentoPage]
})
export class InfoMedicamentoPageModule {}
