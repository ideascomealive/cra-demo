import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

//add a title prop to App
ReactDOM.render(<App title="Pet Manager 5000" />, document.getElementById('root'));
registerServiceWorker();
