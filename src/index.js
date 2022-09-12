import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import HomePage from './HomePage';

ReactDOM.render(
	<BrowserRouter>
		<HomePage />
	</BrowserRouter>, 
	document.getElementById('root')
);

