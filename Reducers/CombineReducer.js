import CounterReducer from './Counter';
import isLoggedReducer from './IsLogged';
import { combineReducers } from 'redux';

const store = combineReducers(
    {
        counter: CounterReducer,
        login: isLoggedReducer
    })

export default store;