import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import './assets/js/rem'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import counter from '../src/store/reducer'
import thunk from 'redux-thunk'

import { HashRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

//1.新建store
const store = createStore(counter,applyMiddleware(thunk));

ReactDOM.render( <HashRouter>
    <Provider store={store}>
    <App/>
    </Provider>
</HashRouter>, document.getElementById('root'));
registerServiceWorker();
