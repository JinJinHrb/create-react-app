// src/js/components/Posts.js

import React, { Component } from "react";
import { connect } from "react-redux";
// import { /* getData */ getDataAction } from "../actions/index";
import demoSlice from '../features/demo/demoSlice';
const { getData } = demoSlice.actions;

export class Post extends Component {
    /* constructor(props) {
        super(props);
    } */

    componentDidMount() {
        // this.props.getData();
        this.props.getData("https://api.valentinog.com/api/link/");
        // this.props.getDataAction({url: "https://api.valentinog.com/api/link/"});
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.articles.map(el => (
                        <li key={el.id}>{el.title}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('#34', state);
    return {
        // articles: (state.remoteArticles || []).slice(0, 10)
        articles: (state.demo.remoteArticles || []).slice(0, 10)
    };
}

export default connect(
    mapStateToProps,
    { getData /* getDataAction */ }
)(Post);