import { Component, OnInit, Input } from '@angular/core';

import { CONDITIONS } from '../../assets/conditions.constant';

@Component({
  selector: 'weather-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})

export class ForecastComponent implements OnInit {
  @Input() location: string;
  @Input() weather: object;

  constructor() {}

  ngOnInit() {
  }

  getIcon(code) {
    if (!code) return false;

    return CONDITIONS.filter(condition => condition.code == code)[0].icon;
  }
}
