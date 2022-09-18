import { CentreExcellenceComponent } from './../centre-excellence/centre-excellence/centre-excellence.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'centre-excellence', component: CentreExcellenceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentreExcellenceRoutingModule { }
