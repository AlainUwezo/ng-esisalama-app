import { ACTUALITY } from './../../../core/service/mock-service';
import { Slide } from '../../../core/models/slide.model';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-actuality-modal',
  templateUrl: './actuality-modal.component.html',
  styleUrls: ['./actuality-modal.component.css']
})
export class ActualityModalComponent implements OnInit{

  actualities: Array<Slide> = ACTUALITY;
  actuality!: Slide|undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:Slide)
    {}

  ngOnInit(){
    this.actuality = this.actualities.find(actuality => actuality.id == this.data.id);
  }
}
