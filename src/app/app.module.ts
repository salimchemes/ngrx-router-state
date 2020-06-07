import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SeriesComponent } from './pages/series/series.component';
import { SeriesDetailComponent } from './pages/series-detail/series-detail.component';
import { MoviesDetailComponent } from './pages/movies-detail/movies-detail.component';
@NgModule({
  declarations: [AppComponent, MoviesComponent, SeriesComponent, SeriesDetailComponent, MoviesDetailComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
