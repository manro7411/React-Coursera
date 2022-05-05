/* eslint-disable no-unused-expressions */
import './App.css';
import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
// import Menu from './MenuComponent';
// import { DISHES } from './dishes';
import Main from './MainComponent';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}
export default App; 