import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherComponent } from './features/weather/weather.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WeatherComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
