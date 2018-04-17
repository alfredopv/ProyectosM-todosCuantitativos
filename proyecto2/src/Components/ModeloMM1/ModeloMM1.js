import React, { Component } from 'react';
import './ModeloMM1.css';

const miu = 0;
const lamda = 0;
const lq = 0;
const l = 0;
const wq = 0;
const w = 0;
class ModeloMM1 extends Component {

  constructor(props){
    super(props);
    this.state = { miu, lamda, lq, l, wq, w };
    this.handleMiuChange = this.handleMiuChange.bind(this);
    this.handleLamdaChange = this.handleLamdaChange.bind(this);
    this.calcularLQ = this.calcularLQ.bind(this);
    this.calcularL = this.calcularL.bind(this);
    this.calcularWQ = this.calcularWQ.bind(this);
    this.calcularW = this.calcularW.bind(this);
  }

  handleMiuChange (evt) {
    this.setState({ miu: evt.target.value }, () => {
      this.calcularLQ();
      this.calcularL();
      this.calcularWQ();
      this.calcularW();
    });
  }

  handleLamdaChange (evt) {
    this.setState({ lamda: evt.target.value }, () => {
      this.calcularLQ();
      this.calcularL();
      this.calcularWQ();
      this.calcularW();
    });
  }


  calcularLQ(){
    const lamda = this.state.lamda;
    const miu = this.state.miu;
    let resultado;
    if(miu === 0){
      resultado = "INF";
    }else if(lamda < 0 || miu < 0){
      resultado = "---";
    }else if(miu === lamda){
      resultado = "INF";
    }else if(miu < lamda){
      resultado = "---";
    }else{
      resultado = (Math.pow(lamda,2)) / (miu * (miu - lamda));
    }
    this.setState({ lq: resultado })
  }

  calcularL(){
    const lamda = this.state.lamda;
    const miu = this.state.miu;
    let resultado;
    if(miu === lamda){
      resultado = "INF";
    }else if(miu === 0){
      resultado = "INF";
    }else if(miu < lamda){
      resultado = "---";
    }else if(lamda < 0 || miu < 0){
      resultado = "---";
    }else{
      resultado = lamda / (miu - lamda);
    }
    this.setState({ l: resultado })
  }

  calcularWQ(){
    const lamda = this.state.lamda;
    const miu = this.state.miu;
    let resultado;
    if(miu === 0){
      resultado = "INF";
    }else if(lamda < 0 || miu < 0){
      resultado = "---";
    }else if(miu === lamda){
      resultado = "INF";
    }else if(miu < lamda){
      resultado = "---";
    }else{
      resultado = lamda / (miu * (miu - lamda));
    }
    this.setState({ wq: resultado })
  }

  calcularW(){
    const lamda = this.state.lamda;
    const miu = this.state.miu;
    let resultado;
    if(miu === 0){
      resultado = "INF";
    }else if(lamda < 0 || miu < 0){
      resultado = "---";
    }else if(miu === lamda){
      resultado = "INF";
    }else if(miu < lamda){
      resultado = "---";
    }else{
      resultado = 1 / (miu - lamda);
    }
    this.setState({ w: resultado })
  }



  render() {
    return (
      <div className="col-md-3 card" >
        <div className="card-body">
          <h3 className="text-center">Modelo M/M/1</h3>
          <form>
            <div className="form-group row">
              <label for="example-text-input" className="col-md-7 col-form-label">Taza Media de Llegada</label>
              <div className="col-md-5">
                <input className="form-control" type="number" min="1" id="example-text-input" onChange={this.handleLamdaChange} />
              </div>
            </div>
            <div className="form-group row">
              <label for="example-text-input" className="col-md-7 col-form-label">Taza Media de Servicio</label>
              <div className="col-md-5">
                <input className="form-control" type="number" min="1" id="example-text-input" onChange={this.handleMiuChange}/>
              </div>
            </div>
          </form>
          <ul className="list-group">
            <li className="list-group-item active">Resultados</li>
            <li className="list-group-item">Promedio Clientes en la Cola: <strong>{ this.state.lq }</strong></li>
            <li className="list-group-item">Promedio Clientes en el Sistema: <strong>{ this.state.l }</strong></li>
            <li className="list-group-item">Tiempo Esperado en la Cola: <strong>{ this.state.wq }</strong></li>
            <li className="list-group-item">Tiempo Esperado en el Sistema; <strong>{ this.state.w }</strong></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ModeloMM1;
