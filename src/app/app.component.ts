import { Component } from '@angular/core';
import { EventserviceService } from './eventservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [EventserviceService],
})
export class AppComponent {
  title = 'room-homepage-master';
  activeSlide = 0;
  slides = [
    {
      content:
        'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andr vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
      header: 'Discover innovative ways to decorate',
      image: 'image-hero-1.jpg',
    },
    {
      content:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      header: 'We are available all across the globe',
      image: 'image-hero-2.jpg',
    },
    {
      content:
        'Our modern furniture store provide a high level of quality. Our company has invested in advance technology to ensure that every product is made perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office',
      header: 'Manufactured with the best materials',
      image: 'image-hero-3.jpg',
    },
  ];

  nextSlide() {
    if (this.activeSlide + 1 < this.slides.length) {
      this.activeSlide = this.activeSlide + 1;
    }
  }

  previousSlide() {
    if (this.activeSlide + -1 >= 0) {
      this.activeSlide = this.activeSlide + -1;
    }
  }

  constructor(private eventService: EventserviceService) {
    this.eventService.nextSlide.subscribe(() => {
      this.nextSlide();
    });
    this.eventService.previousSlide.subscribe(() => {
      this.previousSlide();
    });
  }

  getImageUrl() {
    if (window.matchMedia('(min-width : 480px)').matches) {
      return `desktop-${this.slides[this.activeSlide].image}`;
    }

    return `mobile-${this.slides[this.activeSlide].image}`;
  }
}
