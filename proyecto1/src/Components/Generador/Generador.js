import React from 'react';
import './Generador.css';

const Generador = (props) => {
    let _x0=0, _m=0, _c=0, _a=0;
    const submit = e => {
        console.log("submit");
        e.preventDefault();
        props.datos(_x0.value, _m.value, _a.value, _c.value, props.id);
    }
    if(props.id === 1){
      return (
        <form onSubmit ={submit} >
          <h3>Método de los Centros Cuadrados</h3>
          <div class="Inputs">
            <input ref={input => _x0 = input } type="number" size="4" min="1000" max="9999" placeholder="Semilla" required />
          </div>
          <button className="botonEnviar"> Calcular </ button>
      </form> );
    }else if(props.id === 2){
      return (
        <form onSubmit ={submit} >
          <h3>Método Congruencial</h3>
          <div class="Inputs">
            <input ref={input => _x0 = input } type="number" placeholder="Xo" required />
            <input ref={input => _m = input } type="number" placeholder="m" required />
            <input ref={input => _a = input } type="number" placeholder="a" required />
            <input ref={input => _c = input } type="number" placeholder="c" required />
          </div>
          <button className="botonEnviar"> Calcular </ button>
      </form> );
    }else if(props.id === 3){
      return (
        <form onSubmit ={submit} >
          <h3>Método Congruencial Mixtos</h3>
          <div class="Inputs">
            <input ref={input => _x0 = input } type="number" placeholder="Xo" required />
            <input ref={input => _m = input } type="number" placeholder="m" required />
            <input ref={input => _a = input } type="number" placeholder="c" required />
            <input ref={input => _c = input } type="number" placeholder="a" required />
          </div>
          <button className="botonEnviar"> Calcular </ button>
      </form> );
    }else if(props.id === 4){
      return (
        <form onSubmit ={submit} >
          <h3>Generador Multiplicativo</h3>
          <div class="Inputs">
            <input ref={input => _x0 = input } type="number" placeholder="Xo" required />
            <input ref={input => _m = input } type="number" placeholder="m" required />
            <input ref={input => _a = input } type="number" placeholder="a" required />
          </div>
          <button className="botonEnviar"> Calcular </ button>
      </form> );
    }else{
      return (
        <h3>Selecciona Un Método de Generación de Números Aleatorios</h3>
      );
    }

};


export default Generador;
