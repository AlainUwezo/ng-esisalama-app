import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoraireRoutingModule } from './horaire-routing.module';
import { HoraireComponent } from './horaire/horaire.component';


@NgModule({
  declarations: [
    HoraireComponent
  ],
  imports: [
    CommonModule,
    HoraireRoutingModule
  ]
})
export class HoraireModule { }
