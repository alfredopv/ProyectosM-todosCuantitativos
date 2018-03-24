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
    let i;
    let temp;
    let xo;
    let a;
    let c;
    let m;
    switch(this.props.tipo){
      case 1:
        i = 0;
        let semilla = this.props.semilla;
        let x = semilla;
        temp = [];
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
        break;
      case 2:
        xo = this.props.xo;
        a = this.props.a;
        c = this.props.c;
        m = this.props.m;
        temp = [];
        i = 0;
        while(i < 1000){
          let siguiente = (parseInt(a*xo)+parseInt(c))%m;
          temp.push(siguiente);
          xo = siguiente;
          i++;
        }
        this.setState({numeros:temp})
        break;
      case 3:
        break;
      case 4:
        xo = this.props.xo;
        a = this.props.a;
        m = this.props.m;
        temp = [];
        i = 0;
        while(i < 1000){
          let siguiente = (a*xo)%m;
          temp.push(siguiente);
          xo = siguiente;
          i++;
        }
        this.setState({numeros:temp})
        break;
      default:
        break;
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
