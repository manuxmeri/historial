import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitasPageRoutingModule } from './visitas-routing.module';

import { VisitasPage } from './visitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitasPageRoutingModule,
    BrowserModule
  ],
  declarations: [VisitasPage]
})
export class VisitasPageModule {}
