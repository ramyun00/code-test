import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export default class WeatherService {

  constructor(private http: HttpClient) {}

  getWeather(city) {
    return this.http.get(`http://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}")&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`);
  }
}
