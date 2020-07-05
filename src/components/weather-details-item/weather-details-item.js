import React from 'react';

import './weather-details-item.scss';

const WeatherDetailsItem = ({ value, label }) => {
	return (
		<div className="weather-details-item">
			<div className="weather-details-item__value">
				{value}
			</div>
			<div className="weather-details-item__label">
				{label}
			</div>
		</div>
	);
}

export default WeatherDetailsItem;