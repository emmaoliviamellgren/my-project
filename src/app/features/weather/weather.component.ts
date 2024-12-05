import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../../types/Weather.type';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
	selector: 'app-weather',
	imports: [
		ButtonComponent,
		InputComponent,
		FooterComponent,
		NgIf,
		FormsModule,
	],
	templateUrl: './weather.component.html',
	styles: '',
})
export class WeatherComponent {
	isSubmitting: boolean = false;
	location: string = '';
	weatherData!: Weather;
	errorMessage: string = '';

	constructor(private weatherService: WeatherService) {}

	getWeather(): void {
		this.isSubmitting = true;
		this.errorMessage = '';
		this.weatherService.fetchWeatherFromAPI(this.location).subscribe(
			(data) => {
				this.weatherData = data as Weather;
				this.isSubmitting = false;
			},
			(error: HttpErrorResponse) => {
				if (error.status === 400) {
					this.errorMessage = 'You must enter a valid location.';
				} else {
					this.errorMessage =
						'An error occurred. Please try again later.';
				}
				this.isSubmitting = false;
			}
		);
		this.location = '';
	}

	getTemp(): number {
		return this.weatherData
			? Math.floor(this.weatherData.current.temp_c)
			: 0;
	}
}
