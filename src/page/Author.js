import React, { Component } from "react";
import AuthorService from "../services/Author";
import FormAuthor from "../components/author/FormAuthor";
import ListAuthor from "../components/author/ListAuthor";

export default class Author extends Component {

    constructor(props) {
        super(props);
        this._authorService = new AuthorService();
        this.state = {
            authors: []
        };
        this.findAllAuthors = this.findAllAuthors.bind(this);
    }

    async findAllAuthors() {
        const authors = await this._authorService.findAll()
        this.setState({ authors: authors });
    }

    async componentDidMount() {
        this.findAllAuthors();
    }

    render() {
        return (
            <div>
                <FormAuthor updateListAuthors={this.findAllAuthors}/>
                <ListAuthor authors={this.state.authors} />
            </div>
        );
    }
}