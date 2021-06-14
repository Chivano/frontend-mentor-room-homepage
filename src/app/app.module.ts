import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NavigationBarButtonComponent } from './navigation-bar-button/navigation-bar-button.component';
import { MainTextAreaComponent } from './main-text-area/main-text-area.component';
import { SubTextAreaComponent } from './sub-text-area/sub-text-area.component';
import { HeaderAreaComponent } from './header-area/header-area.component';
import { PictureContainerComponent } from './picture-container/picture-container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavigationBarComponent,
    NavigationBarButtonComponent,
    MainTextAreaComponent,
    SubTextAreaComponent,
    HeaderAreaComponent,
    PictureContainerComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
