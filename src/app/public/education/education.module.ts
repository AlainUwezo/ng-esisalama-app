import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { HoraireModule } from './horaire/horaire.module';
import { CentreExcellenceModule } from './centre-excellence/centre-excellence.module';
import { BibliothequeModule } from './bibliotheque/bibliotheque.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EducationRoutingModule,
    HoraireModule,
    CentreExcellenceModule,
    BibliothequeModule
  ]
})
export class EducationModule { }
