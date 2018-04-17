import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import ModeloMM1 from '../ModeloMM1/ModeloMM1';
import ModeloMMS from '../ModeloMMS/ModeloMMS';
import ModeloMMSK from '../ModeloMMSK/ModeloMMSK';
import ModeloMG1 from '../ModeloMG1/ModeloMG1';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="row">
          <ModeloMM1></ModeloMM1>
          <ModeloMMS></ModeloMMS>
          <ModeloMMSK></ModeloMMSK>
          <ModeloMG1></ModeloMG1>
        </div>
      </div>
    );
  }
}

export default Main;
