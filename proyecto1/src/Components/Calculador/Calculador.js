import React, { Component } from 'react';
import './Calculador.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const numeros = [];

class Calculador extends Component{

  constructor(props){
    super(props);
    this.state = { numeros };
  }

  componentWillMount(){
    if(this.props.tipo === 1){
      let i = 0;
      let semilla = this.props.semilla;
      let x = semilla;
      let temp = [];
      while(i < 1000){
        x = x*x;
        let siguiente;
        if(x.toString().length === 8){
          siguiente = x.toString().substring(2, 6);
          temp.push(siguiente);
        }else if (x.toString().length === 7) {
          siguiente = x.toString().substring(1, 5);
          temp.push(siguiente);
        }else if (x.toString().length === 6) {
          siguiente = x.toString().substring(1, 5);
          temp.push(siguiente);
        }else if (x.toString().length === 5) {
          siguiente = x.toString().substring(0, 4);
          temp.push(siguiente);
        }else if (x.toString().length === 4) {
          siguiente = x.toString();
          temp.push(siguiente);
        }else{
          break;
        }
        this.setState({numeros:temp})
        x = siguiente;
        i++;

      }
    }
  }

	render() {
    const { numeros } = this.state
		return(
      <div>
      <h1>Tus números aleatorios son:</h1>
      <ul>
        {numeros.map((numero,i) =>
          <li key={i}>{numero}</li>
        )}
      </ul>
      </div>
    );
  }
}


export default Calculador;
