import React from 'react';
import WeatherDetailsItem from '../weather-details-item';

import './weather-details.scss';

const WeatherDetails = ({ weather }) => {
	const formatDate = (formatingDate) => {
		const date = new Date(formatingDate * 1000);
		const formatter = new Intl.DateTimeFormat('en', {
			hour: 'numeric',
			minute: 'numeric'
		});

		return formatter.format(date);
	};

	const { temp_max: hight, temp_min: low, humidity } = weather.main;
	const { speed: windSpeed } = weather.wind;
	const { sunrise, sunset } = weather.sys;
	return (
		<div className="weather-details jumbotron col-md-6">
			<WeatherDetailsItem value={Math.floor(hight) + '°'} label='Hight' />
			<WeatherDetailsItem value={Math.floor(windSpeed) + 'mph'} label='Wind' />
			<WeatherDetailsItem value={formatDate(sunrise)} label='Sunrise' />

			<WeatherDetailsItem value={Math.floor(low) + '°'} label='Low' />
			<WeatherDetailsItem value={`${humidity}%`} label='Humidity' />
			<WeatherDetailsItem value={formatDate(sunset)} label='Sunset' />
		</div>
	);
}

export default WeatherDetails;