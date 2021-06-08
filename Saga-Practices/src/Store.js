import { createStore, applyMiddleware } from "redux";
import creteSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import RootReducer from "./Reducer/RootReducer";
import {incrementSaga} from "./Saga"

const sagaMiddleware = creteSagaMiddleware();
const middlewares = [logger, sagaMiddleware];

export const store = createStore(RootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(incrementSaga)

export default store;