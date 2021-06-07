import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  menu = [{ title: 'home', index: 0 },{ title: 'shop', index: 1 },{ title: 'about', index: 2 },{ title: 'contact', index: 3 }];
  constructor() {}

  ngOnInit(): void {}
}
