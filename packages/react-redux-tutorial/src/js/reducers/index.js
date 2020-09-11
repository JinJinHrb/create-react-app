// src/js/reducers/index.js
import { combineReducers } from 'redux';
import { ADD_ARTICLE, DATA_LOADED/* , API_ERRORED */ } from "../constants/action-types";

/* const initialState = {
    articles: [],
    remoteArticles: []
}; */

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
export default rootReducer;