import { SharedPublicModule } from './../shared-public/shared-public.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActualityRoutingModule } from './actuality-routing.module';
import { ActualityComponent } from './actuality/actuality.component';


@NgModule({
  declarations: [
    ActualityComponent
  ],
  imports: [
    CommonModule,
    ActualityRoutingModule,
    SharedPublicModule
  ]
})
export class ActualityModule { }
