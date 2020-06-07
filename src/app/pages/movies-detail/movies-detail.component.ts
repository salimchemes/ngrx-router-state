import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movies } from 'src/app/app.constants';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss'],
})
export class MoviesDetailComponent implements OnInit {
  movieId: number;
  movie;
  constructor(private activatedRoute: ActivatedRoute) {
    this.movieId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    this.movie = movies.find((series) => series.id === this.movieId);
  }

  ngOnInit(): void {}
}
