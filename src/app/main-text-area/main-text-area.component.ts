import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-text-area',
  templateUrl: './main-text-area.component.html',
  styleUrls: ['./main-text-area.component.scss']
})
export class MainTextAreaComponent implements OnInit {

  @Input() text = ""
  @Input() title = ""

  constructor() { }

  ngOnInit(): void {
  }

}
