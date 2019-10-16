import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { ImageSliderComponent } from "./image-slider/image-slider.component";
import { TitleComponent } from "./title/title.component";
import { ImageTextComponent } from "./image-text/image-text.component";
import { ServicesComponent } from "./services/services.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { MatFormFieldModule } from "@angular/material";
import { AnimeComponent } from './anime/anime.component';
import { AnimationComponent } from './animation/animation.component';
import { MyAnimeComponent } from './my-anime/my-anime.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ImageSliderComponent,
    TitleComponent,
    ImageTextComponent,
    ServicesComponent,
    ContactUsComponent,
    AnimeComponent,
    AnimationComponent,
    MyAnimeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
