import { Component, OnInit } from '@angular/core';
import { series } from 'src/app/app.constants';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent implements OnInit {
  series: { id: string; name: string; release: number; link: string }[];

  constructor() {}

  ngOnInit(): void {
    this.series = series;
  }
}
