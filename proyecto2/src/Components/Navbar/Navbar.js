import React, { Component } from 'react';

import './Navbar.css';

class Navbar extends Component {

  constructor( props ){
    super( props )
  }

  render() {
    return (
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Teoría de Filas</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Modelo M/M/1 <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Modelo M/M/s</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Modelo M/M/s/K</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Modelo M/G/1</a>
            </li>
          </ul>
        </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
