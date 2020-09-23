import React from 'react';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faCloud,
	faBolt,
	faCloudRain,
	faCloudShowersHeavy,
	faSnowflake,
	faSun,
	faSmog,
} from '@fortawesome/free-solid-svg-icons';



import Header from '../header';
import SearchPanel from '../search';
import Result from '../result/result';
import * as actions from '../../actions';

// import { WeatherServiceProvider } from '../weather-service-context';
library.add(faCloud, faBolt, faCloudRain, faCloudShowersHeavy, faSnowflake, faSun, faSmog);

const App = ({ setSelectedCity, setSelectedCityWeather, setForecast, selectedCityWeather }) => {
	const handleFormSubmit = async (event) => {
		event.preventDefault();
		const searchingCity = event.target.elements.search.value;
		const apiKey = '9ef336a7b4bdbd408daad5ea2a0a4588';
		const cityWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchingCity}&appid=${apiKey}&units=metric`);
		const forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchingCity}&appid=${apiKey}&units=metric`);

		setSelectedCity(searchingCity);
		setSelectedCityWeather(await cityWeather.json());
		setForecast(await forecast.json());
	}

	const isWeatherSet = Object.getOwnPropertyNames(selectedCityWeather).length;
	return (
		<main className="app">
			<Header />
			<SearchPanel formSubmit={handleFormSubmit} />
			{
				isWeatherSet ? <Result /> : ''
			}
		</main>
	);
}

const mapStateToProps = ({ selectedCityWeather}) => ({ selectedCityWeather });

export default connect(mapStateToProps, actions)(App);
