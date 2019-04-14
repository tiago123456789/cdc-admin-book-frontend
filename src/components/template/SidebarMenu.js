import React from "react";
import { Link } from "react-router-dom";

export default () => (
    <div id="menu">
        <div className="pure-menu">
            <a className="pure-menu-heading" href="#">CDC ADMIN</a>

            <ul className="pure-menu-list">
                <li className="pure-menu-item">
                    <Link to="/" className="pure-menu-link">Home</Link></li>
                <li className="pure-menu-item">
                    <Link to="/authors" className="pure-menu-link">Author</Link></li>
                <li className="pure-menu-item">
                    <Link to="/books" className="pure-menu-link">Books</Link></li>
            </ul>
        </div>
    </div>
);