import React, { Component } from "react";
import Input from "../template/form/Input"
import InputSubmit from "../template/form/InputSubmit";
import AuthorService from "../../services/Author";
import BookService from "../../services/Book";
import FormValidator from "../../services/FormValidator";

export default class ListBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authors: [], error: null,
            title: "", summary: "", author_id: ""
        };
        this._formValidator = new FormValidator([
            {
                field: "title",
                validate: [{ method: "isEmpty", message: "The field title is required!" }]
            },
            {
                field: "summary",
                validate: [
                    { method: "isEmpty", message: "The field summary is required!" }
                ]
            },
            {
                field: "author_id",
                validate: [
                    { method: "isEmpty", message: "The field author is required!" }
                ]
            }
        ]);

        this._bookService = new BookService();
        this._authorService = new AuthorService();
        this.register = this.register.bind(this);
    }

    changeValueInput(key, event) {
        const valueTypingInput = event.target.value;
        this.setState({ [key]: valueTypingInput });
    }

    cleanForm() {
        this.setState({ author_id: "", title: "", summary: "" });
    }

    async register(event) {
        event.preventDefault();
        const { author_id, title, summary } = this.state;
        const error = this._formValidator.check({ author_id, title, summary });
        const existDataInvalid = Object.keys(error).length > 0;
        if (existDataInvalid) {
            this.setState({ error: error });
        } else {
            await this._bookService.create({ author_id, title, summary });
            this.cleanForm();
            this.props.updateListBooks();
        }

    }

    renderListAuthors() {
        return this.state.authors.map(author => (
            <option value={author.id} >{author.name}</option>
        ));
    }

    async componentDidMount() {
        const authors = await this._authorService.findAll();
        this.setState({ authors });
    }

    render() {
        return (
            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned"
                    onSubmit={this.register}>
                    <Input
                        id="title" type="text" name="title" value={this.state.title}
                        onChange={(e) => this.changeValueInput("title", e)} label="Title"
                        error={this.state.error} />
                    <Input
                        id="summary" type="text" name="summary" value={this.state.summary}
                        onChange={(e) => this.changeValueInput("summary", e)} label="Summary"
                        error={this.state.error}
                    />

                    <div className="pure-control-group">
                        <label>Authors</label>
                        <select value={this.state.author_id}
                            onChange={(e) => this.changeValueInput("author_id", e)} >
                            <option>Select one author</option>
                            {this.renderListAuthors()}
                        </select>
                        { this.state.error && 
                            <span>{this.state.error["author_id"]}</span>
                        }
                    </div>


                    <InputSubmit label="Gravar" />
                </form>
            </div>
        );
    }
}