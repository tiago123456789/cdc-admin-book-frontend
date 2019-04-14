import React, { Component } from "react";
import Container from "../components/template/Container";
import ListBook from "../components/book/ListBook";
import FormBook from "../components/book/FormBook";

import BookService from "../services/Book";

export default class Book extends Component {

    constructor() {
        super();
        this._bookService = new BookService();
        this.state = {
            books: []
        };

        this.findAllBooks = this.findAllBooks.bind(this);
    }

    async findAllBooks() {
        const books = await this._bookService.findAll();
        this.setState({ books: books });
    }

    componentDidMount() {
        this.findAllBooks();
    }

    render() {
        return (
            <Container titlePage="Register Book">
                <FormBook updateListBooks={this.findAllBooks}/>
                <ListBook books={this.state.books} />
            </Container>
        );
    }
}