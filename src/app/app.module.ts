import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NavigationBarButtonComponent } from './navigation-bar-button/navigation-bar-button.component';
import { MainTextAreaComponent } from './main-text-area/main-text-area.component';
import { SubTextAreaComponent } from './sub-text-area/sub-text-area.component';
import { PictureAreaComponent } from './picture-area/picture-area.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavigationBarComponent,
    NavigationBarButtonComponent,
    MainTextAreaComponent,
    SubTextAreaComponent,
    PictureAreaComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
