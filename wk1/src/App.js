/* eslint-disable no-unused-expressions */
import './App.css';
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from './dishes'; 
class App extends Component { 

    constructor(props) { 
  
      super(props); 
  
      this.state 
  
        dishes: DISHES 
  
      }; 
  
    } 
export default App;
