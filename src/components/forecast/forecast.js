import React from 'react';
import ForecastItem from '../forecast-item';

import './forecast.scss';

const Forecast = ({ forecast }) => {
	const forecastList = forecast.list;
	
	if (!forecastList)
		return false;
	
	const forecastItems = forecastList.map((item) => {
		console.log(item)
		return <ForecastItem key={item.dt} weather={item}/>
	})

	return (
		<div className="forecast">
			<div className="forecast-list">
				{forecastItems}
			</div>
		</div>
	)
};

export default Forecast;
