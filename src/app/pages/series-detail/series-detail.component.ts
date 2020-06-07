import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { series } from 'src/app/app.constants';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.scss'],
})
export class SeriesDetailComponent implements OnInit {
  seriesId: number;
  series;
  constructor(private activatedRoute: ActivatedRoute) {
    this.seriesId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    this.series = series.find((series) => series.id === this.seriesId);
  }

  ngOnInit(): void {}
}
