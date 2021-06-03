import ScoreReducer from './Score';
import WicketReducer from './Wicket';
import StateAReducer from './StateA';
import { combineReducers } from 'redux';

const store = combineReducers(
    {
        score: ScoreReducer,
        wicket: WicketReducer,
        stateA: StateAReducer
    })

export default store;