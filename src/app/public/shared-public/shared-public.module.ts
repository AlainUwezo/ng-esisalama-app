import { MatDialogModule } from '@angular/material/dialog';
import { ActualityModalComponent } from './actuality-modal/actuality-modal.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventModalComponent } from './event-modal/event-modal.component';



@NgModule({
  declarations: [
    GoogleMapComponent,
    ActualityModalComponent,
    EventModalComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    MatDialogModule
  ],
  exports: [
    GoogleMapComponent,
    ActualityModalComponent
  ]
})
export class SharedPublicModule { }
