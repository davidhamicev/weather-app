export const setSelectedCity = (selectedCityName) => ({
	type: 'SET_SELECTED_CITY',
	payload: selectedCityName
});

export const setSelectedCityWeather = (selectedCityWeather) => ({
	type: 'SET_SELECTED_CITY_WEATHER',
	payload: selectedCityWeather
});
