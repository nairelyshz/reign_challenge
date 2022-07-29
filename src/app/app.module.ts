import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { SliderMenuComponent } from './components/slider-menu/slider-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { DateagoPipe } from './pipes/dateago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewsCardComponent,
    SliderMenuComponent,
    HeaderComponent,
    HomeComponent,
    LoaderComponent,
    DateagoPipe,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    DateagoPipe
  ]
})
export class AppModule { }
