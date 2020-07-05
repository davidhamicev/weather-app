import React from 'react';
import { connect } from 'react-redux';

import ResultHeader from '../result-header';
import WeatherDisplay from '../weather-display';

import './result.scss';

const Result = ({ selectedCityWeather }) => {
	const { name, dt: date } = selectedCityWeather;
	const { country } = selectedCityWeather.sys;

	return (
		<div className="result">
			<ResultHeader name={name} date={date} country={country} />
			<WeatherDisplay weather={selectedCityWeather} />
		</div>
	);
};

const mapStateToProps = ({ selectedCityWeather }) => ({ selectedCityWeather });

export default connect(mapStateToProps)(Result);