import { delay, put } from "@redux-saga/core/effects";
import {takeEvery, takeLatest} from "redux-saga/effects";

export function* onIncrement () {
    yield console.log("Incremented");
    yield delay(5000);
    yield put({type : "IncrementSaga"});

}

export function* incrementSaga() {
    yield takeEvery("Increment", onIncrement);
    //yield takeLatest("Increment", onIncrement);
}
