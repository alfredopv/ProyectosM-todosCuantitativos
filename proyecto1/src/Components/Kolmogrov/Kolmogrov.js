import React, { Component } from 'react';
import './Kolmogrov.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const numeros = null;
const col1 = [];
const col2 = [];
const dmas = 0;
const dmenos = 0;
const dfinal = 0;
const resultado = 0;
class Kolmogrov extends Component {

  constructor( props ){
    super( props )
    this.state = { numeros, col1, col2, dmas, dmenos, dfinal, resultado }
    this.calcularRes1 = this.calcularRes1.bind(this);
    this.calcularRes2 = this.calcularRes2.bind(this);
    this.dDefinitiva = this.dDefinitiva.bind(this);
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
    let resfinal;
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
    let d = this.dDefinitiva(dmenos);
    const tablakolgomorov = [0.9975,
0.95,
0.86428,
0.77639,
0.70543,
0.65287,
0.60975,
0.57429,
0.54443,
0.51872,
0.49539,
0.47672,
0.45921,
0.44352,
0.42934,
0.41644,
0.40464,
0.3938,
0.38379,
0.37451,
0.36588,
0.35782,
0.35027,
0.34318,
0.33651,
0.33022,
0.32425,
0.31862,
0.31327,
0.30818,
0.30333,
0.2987,
0.29248,
0.29005,
0.286,
0.28211,
0.27838,
0.27483,
0.27135,
0.23494,
0.23213,
0.22941,
0.22679,
0.22426,
0.22181,
0.21944,
0.21715,
0.21493,
0.21281,
0.21068];
let t;
if(numeros.length>50){
  t = 1.36/Math.sqrt(numeros.length);
  console.log(t);
}else{
  t = tablakolgomorov[numeros.length-1];
  console.log(tablakolgomorov[numeros.length-1]);
}
if(d<=t){
  resfinal = "se acepta";
}else{

  resfinal = "no se acepta";
}
this.setState({resultado: resfinal})
  }

  dDefinitiva(numero){
    let n = this.state.dmas;

    let n2 = numero;
    if(n>n2){
      return n;
    }else{
      return n2;
    }
  }


  render() {
    return (
      <div>
      <Link to={'/'}><button className="botonEnviar"> Nueva prueba </ button></Link>
        <h1 className="App-title">Prueba de Kolmogrov</h1>
        <p>De acuerdo a los calculos realizados tu prueba arroja un resultado de :</p>
        <p>{this.state.resultado}</p>
      </div>
    );
  }
}

export default Kolmogrov;
