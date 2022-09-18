import { EVENTS } from './../../../core/service/mock-service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { Event } from 'src/app/core/models/event.model';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent implements OnInit {
  events: Array<Event> = EVENTS;
  event!: Event|undefined;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:Event
    ) { }

  ngOnInit(): void {
    this.event = this.events.find(event => event.id == this.data.id);
  }

}
