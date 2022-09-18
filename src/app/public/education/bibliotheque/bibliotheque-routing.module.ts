import { BibliothequeComponent } from './bibliotheque/bibliotheque.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'bibliotheque', component: BibliothequeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliothequeRoutingModule { }
