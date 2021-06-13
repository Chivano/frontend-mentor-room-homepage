import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-bar-button',
  templateUrl: './navigation-bar-button.component.html',
  styleUrls: ['./navigation-bar-button.component.scss'],
})
export class NavigationBarButtonComponent implements OnInit {
  @Input() title = 'test';

  OnClick(title: String) {
    console.log(title);
  }

  constructor() {}

  ngOnInit(): void {}
}
