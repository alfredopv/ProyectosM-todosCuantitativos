import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import ModeloMM1 from '../ModeloMM1/ModeloMM1';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <ModeloMM1></ModeloMM1>
      </div>
    );
  }
}

export default Main;
