import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { SeriesComponent } from './pages/series/series.component';
import { SeriesDetailComponent } from './pages/series-detail/series-detail.component';
import { MoviesDetailComponent } from './pages/movies-detail/movies-detail.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'movies/:movieId',
    component: MoviesDetailComponent,
  },
  {
    path: 'series',
    component: SeriesComponent,
  },
  {
    path: 'series/:seriesId',
    component: SeriesDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
