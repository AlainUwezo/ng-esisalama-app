import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutModule } from './about/about.module';
import { ActualityModule } from './actuality/actuality.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPublicModule } from './shared-public/shared-public.module';
import { EducationModule } from './education/education.module';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    AboutModule,
    ActualityModule,
    HomeModule,
    SharedPublicModule,
    EducationModule
  ],
  exports: [
    PageNotFoundComponent
  ]
})
export class PublicModule { }
