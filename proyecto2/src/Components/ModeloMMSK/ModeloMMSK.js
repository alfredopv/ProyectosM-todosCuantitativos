import React, { Component } from 'react';
import './ModeloMMSK.css'

const miu = 0;
const lamda = 0;
const servidores = 0;
const k = 0;
const lq = 0;
const l = 0;
const wq = 0;
const w = 0;
class ModeloMMSK extends Component {

  constructor(props){
    super(props);
    this.state = { miu, lamda, servidores, k, lq, l, wq, w }
    this.handleMiuChange = this.handleMiuChange.bind(this);
    this.handleLamdaChange = this.handleLamdaChange.bind(this);
    this.handleServidoresChange = this.handleServidoresChange.bind(this);
    this.handleKChange = this.handleKChange.bind(this);
  }

  handleMiuChange( evt ){
    this.setState({ miu: evt.target.value });
  }
  handleLamdaChange( evt ){
    this.setState({ lamda: evt.target.value });
  }
  handleServidoresChange( evt ){
    this.setState({ servidores: evt.target.value });
  }
  handleKChange( evt ){
    this.setState({ k: evt.target.value });
  }

  render() {
    return (
      <div className="col-md-3 card" >
        <div className="card-body">
          <h3 className="text-center">Modelo M/M/s/K</h3>
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
            <div className="form-group row">
              <label for="example-text-input" className="col-md-7 col-form-label">Capacidad del Sistema (k)</label>
              <div className="col-md-5">
                <input className="form-control" type="number" min="2" id="example-text-input" onChange={this.handleKChange} />
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

export default ModeloMMSK;
