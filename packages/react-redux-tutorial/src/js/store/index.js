// src/js/store/index.js

/* no middleware applied
import { createStore } from "redux";
import rootReducer from "../reducers/index";
const store = createStore(rootReducer);
export default store; */

/* import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";

const store = createStore(
  rootReducer,
  applyMiddleware(forbiddenWordsMiddleware)
);

export default store; */

/* import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);

export default store; */

/* import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/api-saga";

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware)
  )
);

initialiseSagaMiddleware.run(apiSaga);

export default store; */


/* redux-saga START */

// import rootReducer from "../reducers/index"; // annotated @ 2020-09-29 15:27:47
/* import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { demoSlice } from '../features/demo/demoSlice';
import { forbiddenWordsMiddleware } from "../middleware";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/api-saga";

const initialiseSagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware(),
  forbiddenWordsMiddleware, initialiseSagaMiddleware
]
const store = configureStore({
  // reducer: rootReducer, // annotated @ 2020-09-29 15:27:47
  reducer: {
    demo: demoSlice.reducer
  },
  middleware,
});
initialiseSagaMiddleware.run(apiSaga);
export default store; */

/* redux-saga END */


import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { demoSlice } from '../features/demo/demoSlice';
import { forbiddenWordsMiddleware } from "../middleware";

const middleware = [
  ...getDefaultMiddleware(),
  forbiddenWordsMiddleware
]
const store = configureStore({
  // reducer: rootReducer, // annotated @ 2020-09-29 15:27:47
  reducer: {
    demo: demoSlice.reducer
  },
  middleware,
});
export default store;