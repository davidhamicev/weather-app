import React from 'react';
import Logo from '../logo';

import './header.scss';

const Header = () => {
	return (
		<header className="header">
			<Logo />

			<div className="header__links">
				<a href="/" className="header__link">GitHub</a>
			</div>
		</header>
	)
};

export default Header;