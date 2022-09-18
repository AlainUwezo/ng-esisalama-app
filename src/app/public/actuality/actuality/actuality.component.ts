import { ActualityModalComponent } from './../../shared-public/actuality-modal/actuality-modal.component';
import { ACTUALITY } from './../../../core/service/mock-service';
import { Slide } from './../../../core/models/slide.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-actuality',
  templateUrl: './actuality.component.html',
  styleUrls: ['./actuality.component.css']
})
export class ActualityComponent implements OnInit {

  slides:Array<Slide> = ACTUALITY;
  // Contiendra une actualite aleatoire affiche a droite et facilement remarquable
  randomActuality!: Slide;

  constructor(
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.randomActuality = this.slides[Math.floor(Math.random() * this.slides.length)];
  }

  onShowActuality(actuality:Slide){
    const dialogRef = this.dialog.open(ActualityModalComponent,{
      data: actuality
    });
  }

  ngAfterViewInit():void{
    const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
      indicators: false,
      height: 300,
      transition: 500,
      interval: 4000
    })

    // For actuaity modal
    var elems = document.querySelector('.modal');
    M.Modal.init(elems, {});
  }

}

