// src/js/reducers/index.js
import { combineReducers } from 'redux';
// import { createReducer } from "@reduxjs/toolkit";
import { ADD_ARTICLE, DATA_LOADED/* , API_ERRORED */ } from "../constants/action-types";

/* createReducer START @ 2020-09-11 20:36:11 */
/* const initialState = {
    articles: [],
    remoteArticles: []
};

const rootReducer = createReducer(initialState, {
    [ADD_ARTICLE]: (state, action) => {
        state.articles = state.articles.concat(action.payload);
    },
    [DATA_LOADED]: (state, action) => {
      state.remoteArticles = state.remoteArticles.concat(action.payload);
    },
}); */
/* createReducer END */

/* function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }

    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payload)
        });
    }

    if( action.type === API_ERRORED){

    }

    return state;
} */

/* combineReducers START */

function articleHandler(state = [], action){
    if (action.type === ADD_ARTICLE) {
        return state.concat(action.payload)
    }
    return state;
}

function dataHandler(state = [], action){
    if (action.type === DATA_LOADED) {
        return state.concat(action.payload)
    }
    return state;
}

/* function errorHandler(state = initialState, action){
    if( action.type === API_ERRORED){

    }
} */

const rootReducer = combineReducers({
    articles: articleHandler,
    remoteArticles: dataHandler
});

/* combineReducers END */

export default rootReducer;