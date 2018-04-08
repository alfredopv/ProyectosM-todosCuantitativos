import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main/Main';
import Kolmogrov from './Components/Kolmogrov/Kolmogrov';
import Chi from './Components/Chi/Chi';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className = "main">
          <Route exact path = "/" component = { Main } />
          <Route exact path = "/chi/" component = { Chi } />
          <Route exact path = "/kolmogrov/" component = { Kolmogrov } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
