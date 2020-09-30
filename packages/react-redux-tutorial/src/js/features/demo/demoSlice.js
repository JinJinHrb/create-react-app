import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    articles: [],
    remoteArticles: []
};

export const getApiData = createAsyncThunk("demo/getData", url => {
    return fetch(url)
        .then(response => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        })
        .then(json => json);
});

export const demoSlice = createSlice({
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
    extraReducers: {
        /* [getData.pending]: state => {
            state.loading = "yes";
        },
        [getData.rejected]: (state, action) => {
            state.loading = "";
            state.error = action.error.message;
        }, */
        [getApiData.fulfilled]: (state, action) => {
            /* state.loading = "";
            state.data = action.payload; */
            state.remoteArticles = state.remoteArticles.concat(action.payload);
        }
    }
});