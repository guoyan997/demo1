import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import './assets/js/rem'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import counter from '../src/store/reducer'
import other from '../src/store/reducer/other'
import thunk from 'redux-thunk'

import { HashRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

// 把多个reducer整合一起
const rootReducer = combineReducers({counter, other})

debugger
//1.新建store
const store = createStore(rootReducer,applyMiddleware(thunk));
// 可以看出store里有4个对象
/**
 * let { subscribe, dispatch, getState, replaceReducer} = createStore(reducer, applyMiddleware(thunk))
 * store.getState()： 获取应用当前State。
 store.subscribe()：添加一个变化监听器。
 store.dispatch()：分发 action。修改State。
 store.replaceReducer()：替换 store 当前用来处理 state 的 reducer。
 */

ReactDOM.render( <HashRouter>
    <Provider store={store}>
    <App/>
    </Provider>
</HashRouter>, document.getElementById('root'));
registerServiceWorker();
