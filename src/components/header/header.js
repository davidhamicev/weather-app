import React from 'react';
import Logo from '../logo';

import './header.scss';

const Header = () => {
	return (
		<header className="header">
			<Logo />

			<div className="header__links">
				<a rel="noopener noreferrer" href="https://github.com/davidhamicev/weather-app" className="header__link" target="_blank">GitHub</a>
			</div>
		</header>
	)
};

export default Header;