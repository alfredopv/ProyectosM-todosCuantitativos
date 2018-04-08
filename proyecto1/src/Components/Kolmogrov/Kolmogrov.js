import React, { Component } from 'react';
import './Kolmogrov.css';

const numeros = null;
const col1 = [];
const col2 = [];
const dmas = 0;
const dmenos = 0;
const dfinal = 0;
class Kolmogrov extends Component {

  constructor( props ){
    super( props )
    this.state = { numeros, col1, col2, dmas, dmenos, dfinal }
    this.calcularRes1 = this.calcularRes1.bind(this);
    this.calcularRes2 = this.calcularRes2.bind(this);
  }

  componentWillMount(){
     const nums = JSON.parse(localStorage.getItem('numeros'));
     this.setState({numeros: nums})
  }

  componentDidMount(){
    this.calcularRes1();
    this.calcularRes2();
  }

  calcularRes1(){
    const { numeros } = this.state;
    let longitud = 0;
    let array = [];
    numeros.sort();
    if( numeros !== null){
      longitud = numeros.length;
    }
    let maximo = 0;
    for(let i = 1; i <= longitud; i++){
      let temp = Math.abs((i/longitud)-numeros[i-1]);
      if(temp > maximo){
        maximo = temp;
      }
      array.push(temp);
    }
    this.setState({col1:array});
    this.setState({dmas:maximo})
  }

  calcularRes2(){
    const { numeros } = this.state;
    let longitud = 0;
    let array = [];
    numeros.sort();
    if( numeros !== null){
      longitud = numeros.length;
    }
    let maximo = 0;
    for(let i = 0; i < longitud; i++){
      let temp = Math.abs(numeros[i]-(i/longitud));
      if(temp > maximo){
        maximo = temp;
      }
      array.push(temp);
    }
    this.setState({col2:array})
    this.setState({dmenos:maximo})
  }


  render() {
    return (
      <div>
        <h1 className="App-title">Prueba de Kolmogrov</h1>
        <p>De acuerdo a los calculos realizados tu prueba arroja un resultado de :</p>
        {this.state.dmas > this.state.dmenos ? <p>{this.state.dmas}</p> : <p>{this.state.dmenos}</p> }
        <p>Revisa tus resultados en la tabla</p>
        <img src="https://image.slidesharecdn.com/tablasks-160210044301/95/tablas-kolmogorovsmirnov-1-638.jpg" />
      </div>
    );
  }
}

export default Kolmogrov;
