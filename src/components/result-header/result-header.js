import React from 'react';
import PropTypes from 'prop-types';

import './result-header.scss';

const ResultHeader = ({ name, date, country }) => {

	const formatDate = (formatingDate) => {
		const date = new Date(formatingDate * 1000);
		const formatter = new Intl.DateTimeFormat('en', {
			weekday: "long",
			day: "numeric",
			month: "long"
		});

		return formatter.format(date);
	};

	const currentDate = formatDate(date);

	return (
		<div className="result-header">
			<div className="result-header__city">{name}, {country}</div>
			<div className="result-header__day">{currentDate}</div>
		</div>
	);
}

export default ResultHeader;

ResultHeader.propTypes = {
	name: PropTypes.string,
	date: PropTypes.number,
	country: PropTypes.string
}
