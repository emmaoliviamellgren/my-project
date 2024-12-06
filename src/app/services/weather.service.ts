import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../../types/Weather.type';
import { environment } from '../../environments/environment.development';

@Injectable({
	providedIn: 'root',
})
export class WeatherService {
	private URL = 'http://api.weatherapi.com/v1/current.json';
	private API_KEY = environment.apiKey;

	constructor(private http: HttpClient) {}

	fetchWeatherFromAPI(location: string): Observable<Weather> {
		return this.http.get<Weather>(
			`${this.URL}?key=${this.API_KEY}&q=${location}&aqi=no`
		);
	}
}
