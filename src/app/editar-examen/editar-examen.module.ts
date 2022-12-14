import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarExamenPageRoutingModule } from './editar-examen-routing.module';

import { EditarExamenPage } from './editar-examen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarExamenPageRoutingModule
  ],
  declarations: [EditarExamenPage]
})
export class EditarExamenPageModule {}
