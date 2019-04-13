import React, { Component } from "react";

export default class ListAuthor extends Component {

    constructor(props) {
        super(props);
    }

    renderListAuthors() {
        return this.props.authors.map((author, indice) => (
            <tr key={indice}>
                <td>{author.name}</td>
                <td>{author.email}</td>
            </tr>
        ));
    }

    render() {
        return (
            <div className="pure-g">
                <table className="pure-table pure-u-2-5">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderListAuthors()}
                    </tbody>
                </table>
            </div>
        );
    }
}