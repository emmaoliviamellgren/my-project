export type Weather = {
	location: {
		name: string;
		region: string;
		country: string;
		lat: number;
		lon: number;
	};
	current: {
		temp_c: number;
		is_day: number;
		condition: {
			text: string;
			icon: string;
			code: number;
		};
		wind_kph: number;
		precip_mm: number;
		humidity: number;
		feelslike_c: number;
	};
};
