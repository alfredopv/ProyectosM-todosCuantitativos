import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'
import './Main.css';

class Main extends Component {

  constructor( props ){
    super( props )
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
      </div>
    );
  }
}

export default Main;
