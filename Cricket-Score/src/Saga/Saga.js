import {put,call, takeLatest, takeEvery} from "redux-saga/effects";
import scoreA from '../Axios/ScoreA';
import {incrementA} from '../Actions/Score';
// import {IncrementSagaA} from '../Reducers/ScoreA';

export  function* increaseSagaA({payload}){
    console.log("payload = ",payload);
    const a = yield call(scoreA,payload);
    console.log("a = ",a);
    yield put({type : "IncrementSagaA", run : Number(a)});
}

export function* incrementSagaA() {
   console.log("Saga AAAAAA");
    yield takeLatest(incrementA().type, increaseSagaA);
}