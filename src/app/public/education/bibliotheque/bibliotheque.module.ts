import { BibliothequeRoutingModule } from './bibliotheque-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibliothequeComponent } from './bibliotheque/bibliotheque.component';



@NgModule({
  declarations: [
    BibliothequeComponent
  ],
  imports: [
    CommonModule,
    BibliothequeRoutingModule
  ]
})
export class BibliothequeModule { }
