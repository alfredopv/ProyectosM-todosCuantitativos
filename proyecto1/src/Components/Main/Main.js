import React, { Component } from 'react';
import Generador from '../Generador/Generador';
import Calculador from '../Calculador/Calculador';
import './Main.css';

const seleccion = 0;
const xo = 0
const m = 0;
const a = 0;
const c = 0;
const tipo = 0;

class Main extends Component {



  constructor( props ){
    super( props )
    this.state = { seleccion ,xo, m, a, c, tipo }
    this.seleccionarOpcion = this.seleccionarOpcion.bind(this)
    this.obtenerDatos = this.obtenerDatos.bind(this)
  }

  seleccionarOpcion(id){
    console.log("Pasé")
    this.setState({seleccion: id})
  }

  obtenerDatos(xo, m, a, c, tipo){
    this.setState({xo: xo, m: m, a: a, c: c, tipo: tipo})
  }

  render() {
    return (
      <div>
        <div id="botonCentrosCuadrados" onClick={() => this.seleccionarOpcion(1)}>
          <p>Método de los Centros Cuadrados</p>
        </div>
        <div id="botonCongruencial" onClick={() => this.seleccionarOpcion(2)}>
          <p>Método Congruencial</p>
        </div>
        <div id="botonCongruencialMixto" onClick={() => this.seleccionarOpcion(3)}>
          <p>Método Congruencial Mixto</p>
        </div>
        <div id="botonGeneradorMultiplicativo" onClick={() => this.seleccionarOpcion(4)}>
          <p>Generador Multiplicativo</p>
        </div>
        <div id="generador">
          <Generador id={this.state.seleccion} datos={this.obtenerDatos} />
        </div>
        {this.state.tipo === 1 ?
        <Calculador tipo={this.state.tipo} semilla={this.state.xo} />
        : (this.state.tipo === 2 ?
          <Calculador tipo={this.state.tipo} xo={this.state.xo} m={this.state.m} a={this.state.a} c={this.state.c} />
          : (this.state.tipo === 3 ?
            <Calculador tipo={this.state.tipo} xo={this.state.xo} m={this.state.m} a={this.state.a} c={this.state.c} />
            : (this.state.tipo === 4 ?
              <Calculador tipo={this.state.tipo} xo={this.state.xo} m={this.state.m} a={this.state.a} />
              : null)))}
      </div>
    );
  }
}

export default Main;
