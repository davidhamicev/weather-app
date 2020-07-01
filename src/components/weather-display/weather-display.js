import React from 'react';
import CurrentWeather from '../current-weather';
import WeatherDetails from '../weather-details';

import './weather-display.scss';

const WeatherDisplay = ({ weather }) => {
	return (
		<div className="weather-display row">
			<CurrentWeather weatherInfo={weather} />
			<WeatherDetails weather={weather} />
		</div>
	);
}

export default WeatherDisplay;