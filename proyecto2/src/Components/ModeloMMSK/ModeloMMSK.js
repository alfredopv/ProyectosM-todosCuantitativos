import React, { Component } from 'react';
import './ModeloMMSK.css'

class ModeloMMSK extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="col-md-3 card" >
        <div className="card-body">
          <h3 className="text-center">Modelo M/M/s/K</h3>
        </div>
      </div>
    );
  }
}

export default ModeloMMSK;
