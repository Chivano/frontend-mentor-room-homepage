import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NavigationBarButtonComponent } from './navigation-bar-button/navigation-bar-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavigationBarComponent,
    NavigationBarButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
