import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    articles: [],
    remoteArticles: []
};

const demoSlice = createSlice({
    name: "demo",
    initialState,
    reducers: {
        'addArticle': (state, action) => {
            state.articles = state.articles.concat(action.payload);
        },
        'getData': (state, action) => {
            // state.remoteArticles = state.remoteArticles.concat(action.payload);
            state.remoteArticles = state.remoteArticles.concat({id: action.payload, title: action.payload});
        }
    },
});
export default demoSlice;