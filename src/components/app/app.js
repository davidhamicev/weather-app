import React from 'react';
import { connect } from 'react-redux';


import Header from '../header';
import SearchPanel from '../search';
import Result from '../result/result';
import * as actions from '../../actions';

// import { WeatherServiceProvider } from '../weather-service-context';

const App = ({ setSelectedCity, setSelectedCityWeather, selectedCityWeather }) => {
	const handleFormSubmit = async (event) => {
		event.preventDefault();
		const searchingCity = event.target.elements.search.value;
		const apiKey = 'f04f20a0cc6867a137b11c4ff7853ba0';
		const cityWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchingCity}&appid=${apiKey}&units=metric`);
		setSelectedCity(searchingCity);
		setSelectedCityWeather(await cityWeather.json());
	}

	return (
		<main className="app">
			<Header />

			<SearchPanel formSubmit={handleFormSubmit} />

			{
				Object.getOwnPropertyNames(selectedCityWeather).length ? <Result cityWeather={selectedCityWeather} /> : ''
			}

		</main>
	);
}

const mapStateToProps = ({ selectedCity, selectedCityWeather }) => ({ selectedCity, selectedCityWeather });

export default connect(mapStateToProps, actions)(App);
