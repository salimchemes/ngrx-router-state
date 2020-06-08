import { Component, OnInit, OnDestroy } from '@angular/core';
import { movies } from 'src/app/app.constants';
import { getRouterState } from 'src/app/store/selectors';
import { StoreRootState } from 'src/app/store';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss'],
})
export class MoviesDetailComponent implements OnInit, OnDestroy {
  movieId: string;
  movie;
  private subscriptions: { [key: string]: any } = {};

  constructor(private store: Store<StoreRootState>) {}

  ngOnInit(): void {
    this.subscriptions.routerSelector = this.store
      .pipe(select(getRouterState))
      .subscribe((route) => {
        const movieId = route.state.params.movieId;
        this.movie = movies.find((movie) => movie.id === movieId);
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.routerSelector.unsubscribe();
  }
}
