import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '../../helpers.js';

import './forecast-item.scss';

const ForecastItem = ({ weather }) => {
	const { main: { temp }, dt_txt: date, } = weather;
	const { main: weatherType } = weather.weather[0];
	const curDay = date.slice(8,10);
	const curMonth = date.slice(5, 7);
	const time = date.slice(11, 16);

	console.log(weather);

	const iconName = icon(weatherType);

	return (
		<div className="forecast-item">
			<div className="forecast-item__date">
				<div className="forecast-item__day">
					{curDay}.{curMonth}
				</div>
				<div className="forecast-item__time">
					{time}
				</div>
			</div>
			<div className="forecast-item__icon">
				<FontAwesomeIcon icon={iconName} />
			</div>
			<div className="forecast-item__temp">
				{Math.ceil(temp)}°
			</div>
		</div>
	)
}

export default ForecastItem;
