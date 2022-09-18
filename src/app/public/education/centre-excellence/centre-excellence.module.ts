import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CentreExcellenceRoutingModule } from './centre-excellence-routing.module';
import { CentreExcellenceComponent } from './centre-excellence/centre-excellence.component';


@NgModule({
  declarations: [
    CentreExcellenceComponent
  ],
  imports: [
    CommonModule,
    CentreExcellenceRoutingModule
  ]
})
export class CentreExcellenceModule { }
