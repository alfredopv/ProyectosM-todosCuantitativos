import React, { Component } from 'react';
import './ModeloMM1.css';

const miu = 0;
const lamda = 0;
const p = 0;
const p0 = 0;
const n = 0;
const pn = 0;
const lq = 0;
const l = 0;
const wq = 0;
const w = 0;
const cw = 0;
const cs = 0;
const ct = 0;
class ModeloMM1 extends Component {

  constructor(props){
    super(props);
    this.state = { miu, lamda, p, p0, lq, l, wq, w, n, pn, cw, cs, ct };
    this.handleMiuChange = this.handleMiuChange.bind(this);
    this.handleLamdaChange = this.handleLamdaChange.bind(this);
    this.handleNChange = this.handleNChange.bind(this);
    this.handleCWChange = this.handleCWChange.bind(this);
    this.handleCSChange = this.handleCSChange.bind(this);
    this.calcularLQ = this.calcularLQ.bind(this);
    this.calcularL = this.calcularL.bind(this);
    this.calcularWQ = this.calcularWQ.bind(this);
    this.calcularW = this.calcularW.bind(this);
    this.calcularP = this.calcularP.bind(this);
    this.calcularP0 = this.calcularP0.bind(this);
    this.calcularPn = this.calcularPn.bind(this);
    this.calcularCT = this.calcularCT.bind(this);
  }

  handleMiuChange (evt) {
    if(Number(evt.target.value) < 0){
      this.setState({ miu: 0 }, () => {
        this.calcularP();
        this.calcularP0();
        this.calcularLQ();
        this.calcularL();
        this.calcularWQ();
        this.calcularW();
        this.calcularPn();
        this.calcularCT();
        /*
        if(this.state.lamda > this.state.miu){
          this.setState({ pn: 0 });
          document.getElementById("inputN1").value = "";
        }*/
      });
    }else{
      this.setState({ miu: evt.target.value }, () => {
        this.calcularP();
        this.calcularP0();
        this.calcularLQ();
        this.calcularL();
        this.calcularWQ();
        this.calcularW();
        this.calcularPn();
        this.calcularCT();
        /*
        if(this.state.lamda > this.state.miu){
          this.setState({ pn: 0 });
          document.getElementById("inputN1").value = "";
        }*/
      });
    }
  }

  handleLamdaChange (evt) {
    if(Number(evt.target.value) < 0){
      this.setState({ lamda: 0 }, () => {
        this.calcularP();
        this.calcularP0();
        this.calcularLQ();
        this.calcularL();
        this.calcularWQ();
        this.calcularW();
        this.calcularPn();
        this.calcularCT();
      });
    }else{
      this.setState({ lamda: evt.target.value }, () => {
        this.calcularP();
        this.calcularP0();
        this.calcularLQ();
        this.calcularL();
        this.calcularWQ();
        this.calcularW();
        this.calcularPn();
        this.calcularCT();
      });
    }
  }

  handleNChange (evt) {
    if(Number(evt.target.value < 0)){
      this.setState({ n: 0 }, () => {
        this.calcularPn();
      });
    }else{
      this.setState({ n: evt.target.value }, () => {
        this.calcularPn();
      });
    }
  }

  handleCWChange (evt) {
    if(Number(evt.target.value < 0)){
      this.setState({ cw: 0 }, () => {
        this.calcularCT();
      });
    }else{
      this.setState({ cw: evt.target.value }, () => {
        this.calcularCT();
      });
    }
  }
  handleCSChange (evt) {
    if(Number(evt.target.value < 0)){
      this.setState({ cs: 0 }, () => {
        this.calcularCT();
      });
    }else{
      this.setState({ cs: evt.target.value }, () => {
        this.calcularCT();
      });
    }
  }


  calcularP(){
    const lamda = this.state.lamda;
    const miu = this.state.miu;
    let resultado = 0;
    resultado = lamda / miu;
    this.setState({ p: resultado.toFixed(5) })
    return resultado.toFixed(5);
  }

  calcularP0(){
    let resultado = 1 - this.calcularP();
    this.setState({ p0: resultado.toFixed(5) })
  }

  calcularPn(){
    const lamda = this.state.lamda;
    const miu = this.state.miu;
    const n = this.state.n;
    let resultado = (1 - (lamda/miu))*(Math.pow(lamda/miu,n));
    this.setState({ pn: resultado.toFixed(5) })
  }


  calcularLQ(){
    const lamda = this.state.lamda;
    const miu = this.state.miu;
    let resultado;
    resultado = (Math.pow(lamda,2)) / (miu * (miu - lamda));
    this.setState({ lq: resultado.toFixed(5) })
    return resultado;
  }

  calcularL(){
    const lamda = this.state.lamda;
    const miu = this.state.miu;
    let resultado;
    resultado = lamda / (miu - lamda);
    this.setState({ l: resultado.toFixed(5) })
  }

  calcularWQ(){
    const lamda = this.state.lamda;
    const miu = this.state.miu;
    let resultado;
    resultado = lamda / (miu * (miu - lamda));
    this.setState({ wq: resultado.toFixed(5) })
  }

  calcularW(){
    const lamda = this.state.lamda;
    const miu = this.state.miu;
    let resultado;
    resultado = 1 / (miu - lamda);
    this.setState({ w: resultado.toFixed(5) })
  }

  calcularCT(){
    const lq = this.calcularLQ();
    const cw = this.state.cw;
    const cs = this.state.cs;
    let resultado;
    resultado = Number(lq) * Number(cw) + Number(cs);
    this.setState({ ct: resultado.toFixed(5) })
  }



  render() {
    return (
      <div className="col-md-3 card" >
        <div className="card-body">
          <h3 className="text-center">Modelo M/M/1</h3>
          <form>
            <div className="form-group row">
              <label for="example-text-input" className="col-md-7 col-form-label">Taza Media de Llegada (λ)</label>
              <div className="col-md-5">
                <input className="form-control" type="number" min="1" max="100" id="example-text-input" onChange={this.handleLamdaChange} />
              </div>
            </div>
            <div className="form-group row">
              <label for="example-text-input" className="col-md-7 col-form-label">Taza Media de Servicio (μ)</label>
              <div className="col-md-5">
                <input className="form-control" type="number" min="1" max="100" id="example-text-input" onChange={this.handleMiuChange}/>
              </div>
            </div>
            <div className="form-group row">
              <label for="example-text-input" className="col-md-7 col-form-label">N para Pn</label>
              <div className="col-md-5">
                <input className="form-control" type="number" min="1" max="100" id="inputN1" onChange={this.handleNChange}/>
              </div>
            </div>

            <div className="form-group row">
              <label for="example-text-input" className="col-md-7 col-form-label">Costo por Tiempo de Espera (cw)</label>
              <div className="col-md-5">
                <input className="form-control" type="number" min="1" max="100" onChange={this.handleCWChange}/>
              </div>
            </div>
            <div className="form-group row">
              <label for="example-text-input" className="col-md-7 col-form-label">Costo del Servicio (cs)</label>
              <div className="col-md-5">
                <input className="form-control" type="number" min="1" max="100" onChange={this.handleCSChange}/>
              </div>
            </div>

          </form>
          { Number(this.state.lamda) >= Number(this.state.miu) ?
            <div className="alert alert-danger" role="alert">
              Sistema no estable
            </div> :
              <ul className="list-group">
                <li className="list-group-item active text-center">Resultados</li>
                <li className="list-group-item">Factor de Utilización (Ρ): <strong>{ this.state.p }</strong></li>
                <li className="list-group-item">Probabilidad 0 Clientes en la Sistema (P0): <strong>{ this.state.p0 }</strong></li>
                <li className="list-group-item">Promedio Clientes en la Cola (LQ): <strong>{ this.state.lq }</strong></li>
                <li className="list-group-item">Promedio Clientes en el Sistema (L): <strong>{ this.state.l }</strong></li>
                <li className="list-group-item">Tiempo Esperado en la Cola (WQ): <strong>{ this.state.wq }</strong></li>
                <li className="list-group-item">Tiempo Esperado en el Sistema (W): <strong>{ this.state.w }</strong></li>
                <li className="list-group-item">Probabilidad (Pn): <strong>{ this.state.pn }</strong></li>
                <li className="list-group-item">Costo Total Esperado (CT): <strong>{ this.state.ct }</strong></li>
              </ul>
            }
        </div>
      </div>
    );
  }
}

export default ModeloMM1;
