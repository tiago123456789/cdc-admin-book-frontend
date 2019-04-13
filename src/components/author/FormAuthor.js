import React, { Component } from "react";
import Author from "../../services/Author";

import Input from "../template/form/Input";
import InputSubmit from "../template/form/InputSubmit";

export default class FormAuthor extends Component {

    constructor(props) {
        super(props);
        this._authorService = new Author();
        this.state = {
            name: "", email: ""
        };

        this.register = this.register.bind(this);
    }

    changeValueInput(key, event) {
        const value = event.target.value;
        this.setState({ [key]: value });
    }

    cleanForm() {
        this.setState({ name: "", email: "" });
    }

    async register(event) {
        event.preventDefault();
        const { email, name } = this.state;
        await this._authorService.create({ email, name });
        this.cleanForm();
        this.props.updateListAuthors()
    }


    render() {
        return (
            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned"
                    onSubmit={this.register}>
                    <Input
                        id="nome" type="text" name="name" value={this.state.name}
                        onChange={(e) => this.changeValueInput("name", e)} label="Name" />
                    <Input
                        id="email" type="email" name="email" value={this.state.email}
                        onChange={(e) => this.changeValueInput("email", e)} label="Email"
                    />
                    <InputSubmit label="Gravar" />
                </form>
            </div>
        );
    }

}