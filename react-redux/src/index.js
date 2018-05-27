import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

//component
import App from './components/';

//reducers
import allReducers from './reducers/';

const store = createStore(
	allReducers
	);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));