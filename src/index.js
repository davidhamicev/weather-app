import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
// import BookstoreService from './services/bookstore-service';
// import { BookstoreServiceProvider } from './components/bookstore-service-context';

// import store from './store';

// const bookstoreService = new BookstoreService();

ReactDOM.render(
	<ErrorBoundry>
		<Router>
			<App />
		</Router>
	</ErrorBoundry>,
	document.getElementById('root')
);