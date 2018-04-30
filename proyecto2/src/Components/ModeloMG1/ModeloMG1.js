import React, { Component } from 'react';
import './ModeloMG1.css'

// sigma σ


const miu = 0;
const lamda = 0;
const sigma = 0;
const p = 0;
const p0 = 0;
const n = 0;
const pn = 0;
const lq = 0;
const l = 0;
const wq = 0;
const w = 0;
class ModeloMG1 extends Component {

  constructor(props){
    super(props);
    this.state = { miu, lamda, p, p0, lq, l, wq, w, n, pn, sigma };
    this.handleSigmaChange = this.handleSigmaChange.bind(this);
    this.handleMiuChange = this.handleMiuChange.bind(this);
    this.handleLamdaChange = this.handleLamdaChange.bind(this);
    this.handleNChange = this.handleNChange.bind(this);
    this.calcularLQ = this.calcularLQ.bind(this);
    this.calcularL = this.calcularL.bind(this);
    this.calcularWQ = this.calcularWQ.bind(this);
    this.calcularW = this.calcularW.bind(this);
    this.calcularP = this.calcularP.bind(this);
    this.calcularP0 = this.calcularP0.bind(this);
    this.calcularPn = this.calcularPn.bind(this);

  }

  handleSigmaChange (evt) {
    this.setState({ sigma: evt.target.value }, () => {
      this.calcularP();
      this.calcularP0();
      this.calcularLQ();
      this.calcularL();
      this.calcularWQ();
      this.calcularW();
      if(this.state.lamda <= this.state.miu){
        this.setState({ pn: 0 });
        document.getElementById("inputN1").value = "";
      }
    });
  }

  handleMiuChange (evt) {
    this.setState({ miu: evt.target.value }, () => {
      this.calcularP();
      this.calcularP0();
      this.calcularLQ();
      this.calcularL();
      this.calcularWQ();
      this.calcularW();
      if(this.state.lamda <= this.state.miu){
        this.setState({ pn: 0 });
        document.getElementById("inputN1").value = "";
      }
    });
  }

  handleLamdaChange (evt) {
    this.setState({ lamda: evt.target.value }, () => {
      this.calcularP();
      this.calcularP0();
      this.calcularLQ();
      this.calcularL();
      this.calcularWQ();
      this.calcularW();
      if(this.state.lamda <= this.state.miu){
        this.setState({ pn: 0 });
        document.getElementById("inputN1").value = "";
      }
    });
  }

  handleNChange (evt) {
    this.setState({ n: evt.target.value }, () => {
      this.calcularPn();
    });
  }

  calcularP(){
    const lamda = this.state.lamda;
    const miu = this.state.miu;
    let resultado = 0;
    resultado = lamda / miu;
    this.setState({ p: resultado.toFixed(5) })
    return resultado;
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
    const sigma = this.state.sigma;
    const p = this.calcularP();
    let resultado = resultado = (Math.pow(lamda,2)*Math.pow(sigma,2)+Math.pow(p,2))/(2*(1-p));
    this.setState({ lq: resultado.toFixed(5) })
    return resultado;
  }

  calcularL(){
    const lq = this.calcularLQ();
    const p = this.calcularP();
    let resultado = lq + p;
    console.log(resultado)
    this.setState({ l: resultado.toFixed(5) })
    return resultado;
  }

  calcularWQ(){
    const lamda = this.state.lamda;
    const miu = this.state.miu;
    const lq = this.calcularLQ();
    let resultado = parseInt(lq/lamda);
    this.setState({ wq: resultado.toFixed(5) })
    return resultado;
  }

  calcularW(){
    const lamda = this.state.lamda;
    const miu = this.state.miu;
    const wq = this.calcularWQ();
    let resultado = parseInt(wq +  (1 / (miu)));
    this.setState({ w: resultado.toFixed(5) })
    return resultado;
  }

  render() {
    return (
      <div className="col-md-3 card" >
        <div className="card-body">
          <h3 className="text-center">Modelo M/G/1</h3>
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
                <input className="form-control" type="number" min="1" id="example-text-input" onChange={this.handleMiuChange}/>
              </div>
            </div>

            <div className="form-group row">
              <label for="example-text-input" className="col-md-7 col-form-label">Varianza (σ)</label>
              <div className="col-md-5">
                <input className="form-control" type="number" min="1" id="example-text-input" onChange={this.handleSigmaChange}/>
              </div>
            </div>
          </form>
          { this.state.lamda > this.state.miu ?
            <div class="alert alert-danger" role="alert">
              Sistema no estable
            </div> :
              <ul className="list-group">
                <li className="list-group-item active text-center">Resultados</li>
                <li className="list-group-item">Factor de Utilización (Ρ): <strong>{ this.state.p }</strong></li>
                <li className="list-group-item">Probabilidad 0 Clientes en la Sistema (P0): <strong>{ this.state.p0 }</strong></li>
                <li className="list-group-item">Promedio Clientes en la Cola (LQ): <strong>{ this.state.lq }</strong></li>
                <li className="list-group-item">Promedio Clientes en el Sistema (L): <strong>{ this.state.l }</strong></li>
                <li className="list-group-item">Tiempo Esperado en la Cola (WQ): <strong>{ this.state.wq }</strong></li>
                <li className="list-group-item">Tiempo Esperado en el Sistema (W); <strong>{ this.state.w }</strong></li>
                <li className="list-group-item">
                  <input className="form-control" type="number" min="1" id="inputN1" placeholder="n" onChange={this.handleNChange}/>
                  Probabilidad (Pn); <strong>{ this.state.pn }</strong>
                </li>
              </ul>
            }
        </div>
      </div>
    );
  }
}

export default ModeloMG1;
