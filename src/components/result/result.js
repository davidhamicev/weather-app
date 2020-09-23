import React from 'react';
import { connect } from 'react-redux';

import ResultHeader from '../result-header';
import WeatherDisplay from '../weather-display';
import Forecast from '../forecast';

import './result.scss';

const Result = ({ selectedCityWeather, selectedCityForecast }) => {
	const { name, dt: date, sys: { country } } = selectedCityWeather;

	return (
		<div className="result">
			<ResultHeader name={name} date={date} country={country} />
			<WeatherDisplay weather={selectedCityWeather} />
			<Forecast forecast={selectedCityForecast}/>
		</div>
	);
};

const mapStateToProps = ({ selectedCityWeather, selectedCityForecast }) => ({ selectedCityWeather, selectedCityForecast });

export default connect(mapStateToProps)(Result);
