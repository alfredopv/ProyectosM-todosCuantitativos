import React, { Component } from 'react';
import './ModeloMMS.css'

const miu = 0;
const lamda = 0;
const servidores = 0;
const lq = 0;
const l = 0;
const wq = 0;
const w = 0;
class ModeloMMS extends Component {

  constructor(props){
    super(props);
    this.state = { miu, lamda, servidores, lq, l, wq, w }
    this.handleMiuChange = this.handleMiuChange.bind(this);
    this.handleLamdaChange = this.handleLamdaChange.bind(this);
    this.handleServidoresChange = this.handleServidoresChange.bind(this);
    this.calcularP0 = this.calcularP0.bind(this);
    this.factorial = this.factorial.bind(this);
    this.calcularLQ = this.calcularLQ.bind(this);
    this.calcularL = this.calcularL.bind(this);
    this.calcularWQ = this.calcularWQ.bind(this);
    this.calcularW = this.calcularW.bind(this);
  }

  factorial(n){
    let res = 1;
    while(n > 0){
      res = res * n;
      n = n-1;
    }
    return res;
  }

  calcularP0(){
    const lamda = this.state.lamda;
    const miu = this.state.miu;
    const servidores = this.state.servidores;
    let sumatoria = 0;
    let multiplicacion = 0;
    let p0;
    for(let i = 0; i < servidores; i++){
      sumatoria = sumatoria + (Math.pow(lamda/miu,i)/this.factorial(i))
    }
    let factor1 = (Math.pow(lamda/miu,servidores)/this.factorial(servidores))
    let factor2 = (servidores*miu)/(servidores*miu-lamda)
    multiplicacion = factor1*factor2;
    p0 = 1/(sumatoria + multiplicacion)
    return p0;
  }

  handleMiuChange( evt ){
    this.setState({ miu: evt.target.value }, () =>{
      this.calcularLQ();
      this.calcularL();
      this.calcularWQ();
      this.calcularW();
    });
  }
  handleLamdaChange( evt ){
    this.setState({ lamda: evt.target.value }, () =>{
      this.calcularLQ();
      this.calcularL();
      this.calcularWQ();
      this.calcularW();
    });
  }
  handleServidoresChange( evt ){
    this.setState({ servidores: evt.target.value }, () =>{
      this.calcularLQ();
      this.calcularL();
      this.calcularWQ();
      this.calcularW();
    });
  }

  calcularLQ(){
    const lamda = this.state.lamda;
    const miu = this.state.miu;
    const servidores = this.state.servidores;
    const p0 = this.calcularP0();
    let numerador = 0;
    let denominador = 0;
    let resultado = 0;
    numerador = Math.pow(lamda/miu,servidores)*lamda*miu*p0;
    denominador = this.factorial(servidores-1)*Math.pow(servidores*miu-lamda,2);
    resultado = numerador/denominador;
    this.setState({ lq: resultado })
    return resultado;
  }
  calcularL(){
    const lamda = this.state.lamda;
    const miu = this.state.miu;
    const lq = this.calcularLQ();
    let resultado = lq + (lamda/miu);
    this.setState({ l: resultado })
  }
  calcularWQ(){
    const lamda = this.state.lamda;
    const lq = this.calcularLQ();
    let resultado = lq / lamda;
    this.setState({ wq: resultado })
    return resultado;
  }
  calcularW(){
    const miu = this.state.miu;
    const wq = this.calcularWQ();
    let resultado = wq + (1/miu);
    this.setState({ w: resultado })
  }

  render() {
    return (
      <div className="col-md-3 card" >
        <div className="card-body">
          <h3 className="text-center">Modelo M/M/s</h3>
          <form>
            <div className="form-group row">
              <label for="example-text-input" className="col-md-7 col-form-label">Taza Media de Llegada (λ)</label>
              <div className="col-md-5">
                <input className="form-control" type="number" min="1" id="example-text-input" onChange={this.handleLamdaChange} />
              </div>
            </div>
            <div className="form-group row">
              <label for="example-text-input" className="col-md-7 col-form-label">Taza Media de Servicio (μ)</label>
              <div className="col-md-5">
                <input className="form-control" type="number" min="1" id="example-text-input" onChange={this.handleMiuChange} />
              </div>
            </div>
            <div className="form-group row">
              <label for="example-text-input" className="col-md-7 col-form-label">Número de Servidores (s)</label>
              <div className="col-md-5">
                <input className="form-control" type="number" min="2" id="example-text-input" onChange={this.handleServidoresChange} />
              </div>
            </div>
          </form>
          <ul className="list-group">
            <li className="list-group-item active text-center">Resultados</li>
            <li className="list-group-item">Promedio Clientes en la Cola (LQ): <strong>{ this.state.lq }</strong></li>
            <li className="list-group-item">Promedio Clientes en el Sistema (L): <strong>{ this.state.l }</strong></li>
            <li className="list-group-item">Tiempo Esperado en la Cola (WQ): <strong>{ this.state.wq }</strong></li>
            <li className="list-group-item">Tiempo Esperado en el Sistema (W); <strong>{ this.state.w }</strong></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ModeloMMS;
