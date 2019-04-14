import React, { Component } from "react";

export default class ListBook extends Component {

    constructor(props) {
        super(props);
    }

    renderListBooks() {
        return this.props.books.map((book, indice) => (
            <tr key={indice}>
                <td>{book.title}</td>
                <td>{book.summary}</td>
            </tr>
        ));
    }

    render() {
        return (
            <div className="pure-g">
                <table className="pure-table pure-u-2-5">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Summary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderListBooks()}
                    </tbody>
                </table>
            </div>
        );
    }
}