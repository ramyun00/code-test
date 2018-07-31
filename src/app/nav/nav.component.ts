import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'weather-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() getWeather: EventEmitter<any> = new EventEmitter();
  @Output() changeColor: EventEmitter<any> = new EventEmitter();

  name = new FormControl('New York, NY');
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.getWeather.emit(this.name.value);
    this.showMenu = false;
  }

  updateColor(color) {
    this.theme = color;
    this.changeColor.emit(color);
  }

}
