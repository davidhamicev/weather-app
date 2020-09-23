export const icon = (weatherType) => {
	switch (weatherType) {
		case 'Thunderstorm':
			return 'bolt';
		case 'Drizzle':
			return 'cloud-rain'
		case 'Rain':
			return 'cloud-showers-heavy'
		case 'Snow':
			return 'snow-flake'
		case 'Clear':
			return 'sun'
		case 'Clouds':
			return 'cloud';
		default:
			return 'smog';
	}
};
