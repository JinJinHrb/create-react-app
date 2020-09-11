// src/js/actions/index.js

import { ADD_ARTICLE_REQ, DATA_REQUESTED } from "../constants/action-types";

/*
export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
}; */

/* use redux-thunk */
/* export function addArticle(payload) {
    return function (dispatch){
        return dispatch({ type: ADD_ARTICLE, payload })
    }
}; */

/* use redux-saga */
export function addArticle(payload) {
    return { type: ADD_ARTICLE_REQ, payload }
};

/* use redux-thunk
export function getData() {
    return function (dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: "DATA_LOADED", payload: json });
            });
    };
}
*/

/* use redux-saga */
/* export function getData() {
    return { type: DATA_REQUESTED };
} */

/* use redux-saga with arguments */
export function getData(url) {
    return { type: DATA_REQUESTED, payload: { url } };
}