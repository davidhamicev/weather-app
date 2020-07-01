import React from 'react';

import './current-weather.scss';

const CurrentWeather = ({ weatherInfo }) => {
	const { temp } = weatherInfo.main;
	const { description: weatherDesc } = weatherInfo.weather[0];
    console.log("CurrentWeather -> weatherDesc", weatherDesc)

	return (
		<div className="current-weather jumbotron">
			{Math.floor(temp)}°
			{weatherDesc}
		</div>
	);
}

export default CurrentWeather;