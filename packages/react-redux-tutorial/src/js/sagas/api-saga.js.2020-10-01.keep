// src/js/sagas/api-saga.js
import { API_ERRORED, ADD_ARTICLE_REQ, ADD_ARTICLE, DATA_REQUESTED, DATA_LOADED } from "../constants/action-types";
import { takeEvery, call, put } from "redux-saga/effects";

export default function* watcherSaga() {
    yield takeEvery(DATA_REQUESTED, workerSaga);
    yield takeEvery(ADD_ARTICLE_REQ, workerSaga2)
}

/* function* workerSaga() {
    try {
        const payload = yield call(getData)
        yield put({ type: DATA_LOADED, payload });
    } catch (e) {
        yield put({ type: API_ERRORED, payload: e });
    }
} */
function* workerSaga(action) {

    const getData = url => {
        return fetch(url).then(response => response.json());
    }
    try {
        const payload = yield call(getData, action.payload.url);
        yield put({ type: DATA_LOADED, payload });
    } catch (e) {
        yield put({ type: API_ERRORED, payload: e });
    }
}

/* function getData() {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
        response.json()
    );
} */

function* workerSaga2(action) {
    const payload = action.payload;
    yield put({ type: ADD_ARTICLE, payload });
}