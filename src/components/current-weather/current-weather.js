import React from 'react';
import { icon } from '../../helpers.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './current-weather.scss';

const CurrentWeather = ({ weatherInfo }) => {
	const { temp } = weatherInfo.main;
	const { description: weatherDesc, main: weatherType } = weatherInfo.weather[0];

	const iconName = icon(weatherType);

	return (
		<div className="current-weather col-md-5">
			<div className="current-weather__temp">
				{Math.floor(temp)}°
			</div>
			<div className="current-weather__desc">
				<div className="current-weather__icon">
					<FontAwesomeIcon icon={iconName} />
				</div>
				<div className="current-weather__label">
					{weatherDesc}
				</div>
			</div>
		</div>
	);
}

export default CurrentWeather;
