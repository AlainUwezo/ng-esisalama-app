import { EventModalComponent } from './../../shared-public/event-modal/event-modal.component';
import { ActualityModalComponent } from './../../shared-public/actuality-modal/actuality-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ACTUALITY, EVENTS } from './../../../core/service/mock-service';
import { Slide } from './../../../core/models/slide.model';
import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/core/models/event.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides!:Array<Slide>;
  events:Array<Event> = EVENTS;
  actualities:Array<Slide> = ACTUALITY;

  constructor(
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.slides = SLIDES;
  }
  ngAfterViewInit():void{


    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('#carousel-actuality');
      var instances = M.Carousel.init(elems, {});
    });

    let slider:HTMLElement|null = document.querySelector('#demo-carousel-auto');
    let slides = document.querySelectorAll('#demo-carousel-auto');
    var slideInstance = M.Carousel.init(slides, {
      fullWidth: true,
      indicators: true
    })

    let carouselImage:HTMLElement | null = document.querySelector('#carousel_img');
    // On recupere la hauteur de la premiere image du carousel apres le chargement
    // Ensuite on attribue au carousel la hauteur de cette image
    window.addEventListener('load', () =>{
      if(slider != null){
        slider.style.height = `${carouselImage?.clientHeight}px`;
      }
    })
    // On crée un événément pour le slider
    setInterval(()=>{
      M.Carousel.getInstance(slides[0]).next();
    }, 4000);
  }

  onShowActuality(actuality:Slide){
    const dialogRef = this.dialog.open(ActualityModalComponent, {
      data: actuality
    });
  }

  onShowEvent(event: Event){
    this.dialog.open(EventModalComponent, {
      data: event
    });
  }
}


const SLIDES:Slide[] = [{
  id: 1,
  title: "Télécommunication",
  description: "La filière des designers",
  image: "./assets/img/slider/banner_principale.jpg"
},{
  id: 2,
  title: "Génié Logiciel",
  description: "La filière des programmeurs",
  image: "./assets/img/slider/banner_genie_log.png"
},{
  id: 3,
  title: "Réseaux",
  description: "La filière des réseautistes",
  image: "./assets/img/slider/banner_reseaux.png"
},{
  id: 4,
  title: "Design & Multimédia",
  description: "La filière des ingénieurs",
  image: "./assets/img/slider/banner_design.png"
}]
