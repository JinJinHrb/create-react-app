// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";
import {v4 as uuidv4} from 'uuid';

/* function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
} */

class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        /* business logic moved to middleware
        const forbiddenWords = ['spam', 'money'];
        const foundWord = forbiddenWords.filter(word => title.includes(word) )
        if (foundWord) {
            return this.props.titleForbidden();
        } */
        this.props.addArticle({ id: uuidv4(), title });
        this.setState({ title: "" });
    }

    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit">SAVE</button>
            </form>
        );
    }
}

const Form = connect(
    null, // mapStateToProps
    { addArticle } // mapDispatchToProps
)(ConnectedForm);

export default Form;