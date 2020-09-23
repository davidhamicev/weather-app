const initialState = {
	selectedCity: '',
	selectedCityWeather: {},
	selectedCityForecast: {}
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_SELECTED_CITY':
			return {
				...state,
				selectedCity: action.payload
			}
		case 'SET_SELECTED_CITY_WEATHER':
			return {
				...state,
				selectedCityWeather: action.payload
			}
		case 'SET_FORECAST':
			return {
				...state,
				selectedCityForecast: action.payload
			}
		default:
			return state;
	}
}

export default reducer;
