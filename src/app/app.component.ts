import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import WeatherService from './weather.service';

@Component({
  selector: 'weather-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    const defaultLocation = 'New York, NY';
    this.getWeather(defaultLocation);
  }

  getWeather(city) {
    this.weatherService.getWeather(city).subscribe(
      (response) => {
        let data = response.query.results.channel;
        this.location = data.location;
        this.item = data.item;
      };
    )
  }

  onChangeColor(color) {
    document.body.className = color;
  }
}
