import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import SidebarMenu from "./components/template/SidebarMenu";
import Container from "./components/template/Container";
import Author from "./page/Author";
import Book from "./page/Book";

import './css/pure-min.css';
import './css/side-menu.css';
import Welcome from './page/Welcome';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
        </a>
        <Router>
          <SidebarMenu />

          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/authors" component={Author} />
            <Route exact path="/books" component={Book} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
