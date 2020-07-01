import React from 'react';
import PropTypes from 'prop-types';

import ResultHeader from '../result-header';
import WeatherDisplay from '../weather-display';

import './result.scss';

const Result = ({ cityWeather }) => {
	const { name, dt: date } = cityWeather;
	const { country } = cityWeather.sys;

	return (
		<div className="result">
			<ResultHeader name={name} date={date} country={country} />
			<WeatherDisplay weather={cityWeather} />
		</div>
	);
};

export default Result;

Result.defaultProps = {
	cityWeather: {}
};

Result.prototype = {
	cityWeather: PropTypes.object,
};