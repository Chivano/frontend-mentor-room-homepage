import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventserviceService {
  private nextSlideSource = new Subject<string>();
  private previousSlideSource = new Subject<string>();

  nextSlide = this.nextSlideSource.asObservable();
  previousSlide = this.previousSlideSource.asObservable();

  next(mission: string) {
    this.nextSlideSource.next(mission);
  }

  previous(astronaut: string) {
    this.previousSlideSource.next(astronaut);
  }
}
