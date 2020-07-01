import React from 'react';
import PropTypes from 'prop-types';

import './search.scss';

const SearchPanel = ({ formSubmit}) => {
	return (
		<form className="search" onSubmit={formSubmit}>
			<input
				type="text"
				className="search__input"
				placeholder="Enter city"
				name="search"
			/>
			<i className="search__icon fa fa-search" aria-hidden="true"></i>
		</form>
	);
}

export default SearchPanel;


SearchPanel.propTypes = {
	formSubmit: PropTypes.func,
	inputChange: PropTypes.func,
}