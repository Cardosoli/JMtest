import React from 'react';
import ReactDOM from 'react-dom';

import * as registerServiceWorker from './cnpjService/registerServiceWorker';

import './style.scss'
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker.unregister();
