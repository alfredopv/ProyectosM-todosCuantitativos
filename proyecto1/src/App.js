import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main/Main';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className = "main">
          <Route exact path = "/" component = { Main } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
