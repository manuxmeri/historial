import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPacientesPageRoutingModule } from './info-pacientes-routing.module';

import { InfoPacientesPage } from './info-pacientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPacientesPageRoutingModule
  ],
  declarations: [InfoPacientesPage]
})
export class InfoPacientesPageModule {}
