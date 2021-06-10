
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {incrementSagaA} from "./Saga/Saga"
import allreducer from './Reducers/CombineReducer';
import { Provider } from 'react-redux';


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  allreducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(incrementSagaA)

ReactDOM.render(<Provider store={store} > <App /> </Provider>, document.getElementById('root'));

;

