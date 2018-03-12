import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div>
        <div id="botonCentrosCuadrados">
          <p>Método de los Centros Cuadrados</p>
        </div>
        <div id="botonCongruencial">
          <p>Método Congruencial</p>
        </div>
        <div id="botonCongruencialMixto">
          <p>Método Congruencial Mixto</p>
        </div>
        <div id="botonGeneradorMultiplicativo">
          <p>Generador Multiplicativo</p>
        </div>
      </div>
    );
  }
}

export default Main;
