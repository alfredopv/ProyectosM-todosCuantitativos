import React, { Component } from 'react';
import './Calculador.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const numeros = [];
const valido = 1;

class Calculador extends Component{

  constructor(props){
    super(props);
    this.state = { numeros, valido };
    this.calcularMCD = this.calcularMCD.bind(this);
    this.calcularModQ = this.calcularModQ.bind(this);
    this.calcularMod4 = this.calcularMod4.bind(this);
  }

  calcularMCD(num1, num2){
    let x1 = num1;
    let x2 = num2;
    let temp = 0;
    while(x2 !== 0){
      temp = x1;
      x1 = x2;
      x2 = temp % x2;
    }
    if(x1 !== 1){
      this.setState({valido : 0});
    }
    console.log(x1);
  }

  calcularModQ(a, m){
    let factoresX = [];
    let encontrado = 0;
    let cantidad = 0;
    for(let  i = 1; i < m; i++){
      if(m % i === 0){
        factoresX.push(i);
        cantidad++;
      }
    }
    for(let i = 1; i < cantidad; i++){
      if((a-1) % factoresX[i] === 0){
        encontrado = 1;
      }
    }
    if(encontrado !== 1){
      this.setState({valido : 0});
    }
    console.log(encontrado);
  }

  calcularMod4(a){
    if((a-1) % 4 !== 0){
      this.setState({valido : 0});
    }
  }

  componentWillMount(){
    if(document.getElementById("generador") !== null){
      document.getElementById("generador").remove()
    }
    if(document.getElementsByClassName("menu") !== null){
      document.getElementsByClassName("menu")[0].remove()
    }
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
            if(siguiente !== "0000" && temp.indexOf(siguiente/10000) === -1){
              temp.push(siguiente/10000);
            }
          }else if (x.toString().length === 7) {
            siguiente = x.toString().substring(1, 5);
            if(siguiente !== "0000" && temp.indexOf(siguiente/10000) === -1){
              temp.push(siguiente/10000);
            }
          }else if (x.toString().length === 6) {
            siguiente = x.toString().substring(1, 5);
            if(siguiente !== "0000" && temp.indexOf(siguiente/10000) === -1){
              temp.push(siguiente/10000);
            }
          }else if (x.toString().length === 5) {
            siguiente = x.toString().substring(0, 4);
            if(siguiente !== "0000" && temp.indexOf(siguiente/10000) === -1){
              temp.push(siguiente/10000);
            }
          }else if (x.toString().length === 4) {
            siguiente = x.toString();
            if(siguiente !== "0000" && temp.indexOf(siguiente/10000) === -1){
              temp.push(siguiente/10000);
            }
          }else{
            break;
          }
          this.setState({numeros:temp})
          x = siguiente;
          i++;
        }
        localStorage.setItem('numeros', JSON.stringify(temp));
        break;
      case 2:
        xo = this.props.xo;
        a = this.props.a;
        c = this.props.c;
        m = this.props.m;
        temp = [];
        i = 0;
        while(i < 1000){
          let siguiente = ((parseInt(a*xo)+parseInt(c))%m)/m;
          if(temp.indexOf(siguiente) === -1){
            temp.push(siguiente);
            xo = siguiente*m;
            i++;
          }else{
            break;
          }
        }
        this.setState({numeros:temp})
        localStorage.setItem('numeros', JSON.stringify(temp));
        break;
      case 3:
        xo = this.props.xo;
        a = this.props.a;
        c = this.props.c;
        m = this.props.m;
        temp = [];
        this.calcularMCD(m,c);
        this.calcularModQ(a,m);
        this.calcularMod4(a);
        i = 0;
        while(i < 1000){
          let siguiente = ((parseInt(a*xo)+parseInt(c))%m)/m;
          if(temp.indexOf(siguiente) === -1){
            temp.push(siguiente);
            xo = siguiente*m;
            i++;
          }else{
            break;
          }
        }
        this.setState({numeros:temp})
        localStorage.setItem('numeros', JSON.stringify(temp));
        break;
      case 4:
        xo = this.props.xo;
        a = this.props.a;
        m = this.props.m;
        temp = [];
        i = 0;
        while(i < 1000){
          let siguiente = ((a*xo)%m)/m;
          if(temp.indexOf(siguiente) === -1){
            temp.push(siguiente);
            xo = siguiente*m;
            i++;
          }else{
            break;
          }
        }
        this.setState({numeros:temp})
        localStorage.setItem('numeros', JSON.stringify(temp));
        break;
      default:
        break;
    }
  }

	render() {
    const { numeros } = this.state
    if(numeros !== undefined){
      return(
        <div id="numerosAleatorios">
        {this.state.valido === 1 ?
          <div>
            <h1>Tus números aleatorios son:</h1>
            <ul>
              {numeros.map((numero,i) =>
                <li key={i}>{numero}</li>
              )}
            </ul>
            <Link to={'/chi'}><button className="botonEnviar"> Chi Cuadrada </ button></Link>
            <Link to={'/kolmogrov'}><button className="botonEnviar"> Kolmogrov </ button></Link>
          </div>
        :
          <h1>Tus valores no cumplen con el teorema de Hull-Dobel:</h1>
        }
        </div>
      );
    }else{
      return( null );
    }
  }
}


export default Calculador;
