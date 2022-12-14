import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacienteEditarPageRoutingModule } from './paciente-editar-routing.module';

import { PacienteEditarPage } from './paciente-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacienteEditarPageRoutingModule
  ],
  declarations: [PacienteEditarPage]
})
export class PacienteEditarPageModule {}
