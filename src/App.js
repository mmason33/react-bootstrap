import React, { Component } from 'react';

import BaseNav from './ui/NavBar.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import Container from './ui/Container.js';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BaseNav/>
          <Container/>
      </div>
    );
  }
}

export default App;
