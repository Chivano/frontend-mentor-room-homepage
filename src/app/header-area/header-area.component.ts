import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  Injectable,
} from '@angular/core';

@Component({
  selector: 'app-header-area',
  templateUrl: './header-area.component.html',
  styleUrls: ['./header-area.component.scss'],
  providers: [],
})
export class HeaderAreaComponent implements OnInit {
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
