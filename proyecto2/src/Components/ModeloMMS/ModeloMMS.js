import React, { Component } from 'react';
import './ModeloMMS.css'

class ModeloMMS extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="col-md-3 card" >
        <div className="card-body">
          <h3 className="text-center">Modelo M/M/s</h3>
        </div>
      </div>
    );
  }
}

export default ModeloMMS;
