import React, { Component } from 'react';
import './Chi.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let numeros = [];
const cuenta = 0;
const resultado = "";


class Chi extends Component {

    constructor( props ){
        super( props )
        this.state = { numeros, cuenta, resultado }
        this.contar = this.contar.bind(this);
    }

    componentWillMount(){
     	const nums = JSON.parse(localStorage.getItem('numeros'));
     	this.setState({numeros: nums})
  }

  contar(limiteInferior, limiteSuperior) {

    console.log(limiteInferior +  " limites " + limiteSuperior);
    const { numeros } = this.state;
    console.log(numeros.length);
		let contador=0;
		console.log(contador+" hola");
		for(let i=0;i< numeros.length;i++) {
			if(numeros[i]>=limiteInferior && numeros[i]<=limiteSuperior) {
				contador++;
			}
		}
		return contador
	}

	obtenerChiTabla(n){
		let tabla = [3.8415,
5.9915,
7.8147,
9.4877,
11.0705,
12.5916,
14.0671,
15.5073,
16.919,
18.307,
19.6752,
21.0261,
22.362,
23.6848,
24.9958,
26.2962,
27.5871,
28.8693,
30.1435,
31.4104,
32.6706,
33.9265,
35.1725,
36.4150,
37.6525,
38.8851,
40.1133,
41.3372,
42.5569
];
		if(n > 29){
			return tabla[29];
		}else{
			return tabla[n];
		}
	}



  componentDidMount(){
    let { numeros } = this.state;
    numeros.sort();
    console.log(numeros);
    const clases = Math.trunc(1+ Math.log10(numeros.length)/Math.log10(2));
    let limites = [];
    let frecuencias =  [];
		let probabilidades = [];
    let x20 = [];


    const numeroPrimero = numeros[0];
    const numeroFinal = numeros[numeros.length-1];
    console.log(numeroPrimero, numeroFinal);
    const sizeClass = (numeroFinal-numeroPrimero)/clases;
    let limiteInferior = numeroPrimero;
    let limiteSuperior = numeroPrimero+sizeClass;
    let chi_cuadrada = 0;
		let indice = 0;
    //const teorica = 30;
    while (limiteSuperior < numeroFinal) {
      let temp = this.contar(limiteInferior,limiteSuperior);
      while((temp<5) && (limiteSuperior < numeroFinal)) {
        limiteSuperior+=sizeClass;
        temp = this.contar(limiteInferior,limiteSuperior);;

      }
      temp = this.contar(limiteInferior,limiteSuperior);
      if((limiteSuperior>=numeroFinal) && temp<5) {
        console.log("Entro");
				const clase = [limites[indice],limiteSuperior];
        limites[indice]= clase;

        let temp2 = this.contar(limites[indice][0],limiteSuperior);
				frecuencias[indice]=temp2/numeros.length;
				probabilidades[indice]=(1/(limiteSuperior-limiteInferior));
				chi_cuadrada-=x20[indice];
				x20[indice] = Math.pow((frecuencias[indice]-probabilidades[indice], 2)/probabilidades[indice]);
			}else {

				const clase = {limiteInferior,limiteSuperior};
				limites.push(clase);
        let temp2 = 0;
        temp2 = this.contar(limites[indice][0],limites[indice][1]);
				frecuencias.push((temp2)/numeros.length);
				probabilidades.push(1/(limiteSuperior-limiteInferior));
				limiteInferior=limiteSuperior;
				limiteSuperior+=sizeClass;
				x20.push(Math.pow(frecuencias[indice]-probabilidades[indice], 2)/probabilidades[indice]);
				chi_cuadrada+=x20[indice];
				indice++;

			}
    }
    console.log(chi_cuadrada);
		let v = limites.length-1;
		let res = "";
		if(chi_cuadrada<=this.obtenerChiTabla(v)){
			res = "se acepta";
		}else{
			res = "no se acepta";
		}
		this.setState({resultado: res})
  }


  render() {
    return (
			<div>
			<Link to={'/'}><button className="botonEnviar"> Nueva prueba </ button></Link>
      <h1 className="App-title">Prueba de Chi Cuadrada</h1>
			<p>De acuerdo a los calculos realizados tu prueba arroja un resultado de :</p>
			<p>{this.state.resultado}</p>
			</div>
    );
  }
}

export default Chi;
