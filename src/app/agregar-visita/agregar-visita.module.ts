import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarVisitaPageRoutingModule } from './agregar-visita-routing.module';

import { AgregarVisitaPage } from './agregar-visita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarVisitaPageRoutingModule
  ],
  declarations: [AgregarVisitaPage]
})
export class AgregarVisitaPageModule {}
