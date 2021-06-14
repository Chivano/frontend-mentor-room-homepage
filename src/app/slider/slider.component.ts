import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventserviceService } from '../eventservice.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  first = 'what';
  constructor(private eventService: EventserviceService) {}

  OnPreviousClick() {
    this.eventService.previous('dsa');
  }
  OnNextClick() {
    this.eventService.next('das');
  }
  ngOnInit(): void {}
}
