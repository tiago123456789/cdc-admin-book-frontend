import React, { Component } from 'react';
import SidebarMenu from "./components/template/SidebarMenu";
import Container from "./components/template/Container";
import Author from "./page/Author";

import './css/pure-min.css';
import './css/side-menu.css';

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
        <SidebarMenu />
        <Container titlePage="Cadastro de Autores">
          <Author />
        </Container>

      </div>
    );
  }
}

export default App;
