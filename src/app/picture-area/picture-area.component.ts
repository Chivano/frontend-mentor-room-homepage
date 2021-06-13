import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-picture-area',
  templateUrl: './picture-area.component.html',
  styleUrls: ['./picture-area.component.scss'],
})
export class PictureAreaComponent implements OnInit {
  @Input() displayNavigationBar = false;
  @Input() pictureUrl = '';
  @Input() activeSlider = false;
  mq = window.matchMedia('(min-width : 480px)');
  displaySlider = !this.mq.matches;

  constructor() {
    this.mq.addEventListener('change', (event) => {
      this.displaySlider = !event.matches;
    });
  }

  getUrl() {
    return `url(/assets/${this.pictureUrl})`;
  }
  ngOnInit(): void {}
}
