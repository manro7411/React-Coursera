import './App.css';
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container ">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <div className='d-flex col-12 mt-5'>
        <Menu />
        </div>
      </div>
    );
  }
}
export default App;
