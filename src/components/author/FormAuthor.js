import React, { Component } from "react";
import Author from "../../services/Author";

import Input from "../template/form/Input";
import InputSubmit from "../template/form/InputSubmit";
import FormValidator from "../../services/FormValidator";

export default class FormAuthor extends Component {

    constructor(props) {
        super(props);
        this._authorService = new Author();
        this.state = {
            name: "", email: "", error: null
        };

        this._formValidator = new FormValidator([
            {
                field: "name",
                validate: [ {  method: "isEmpty", message: "The field name is required!" } ]
            },
            {
                field: "email",
                validate: [ 
                    { method: "isEmpty", message: "The field email is required!" }
                ]
            }
        ]);
        this.register = this.register.bind(this);
    }

    changeValueInput(key, event) {
        const value = event.target.value;
        this.setState({ [key]: value });
    }

    cleanForm() {
        this.setState({ name: "", email: "", error: null });
    }

    async register(event) {
        event.preventDefault();
        const { email, name } = this.state;
        const error = this._formValidator.check({ email, name });
        const existDataInvalid = Object.keys(error).length > 0;
        
        if (existDataInvalid) {
            this.setState({ 
                error: error 
            });
        } else {
            await this._authorService.create({ email, name });
            this.cleanForm();
            this.props.updateListAuthors()
        }
    }


    render() {
        return (
            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned"
                    onSubmit={this.register}>
                    <Input
                        id="nome" type="text" name="name" value={this.state.name}
                        onChange={(e) => this.changeValueInput("name", e)} label="Name" 
                        error={this.state.error}/>
                    <Input
                        id="email" type="email" name="email" value={this.state.email}
                        onChange={(e) => this.changeValueInput("email", e)} label="Email"
                        error={this.state.error}
                    />
                    <InputSubmit label="Gravar" />
                </form>
            </div>
        );
    }

}