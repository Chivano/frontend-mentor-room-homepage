import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  faBars = faBars;
  isMobile() {
    return !window.matchMedia('(min-width : 700px)').matches;
  }

  menu = [
    { title: 'home', index: 0 },
    { title: 'shop', index: 1 },
    { title: 'about', index: 2 },
    { title: 'contact', index: 3 },
  ];

  ngOnInit(): void {}
}
