import React, { Component } from 'react';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Authentication using JWTs</h1>
        </header>
        <p className="App-intro">
          Please implement the required code for the assignment.
        </p>
      </div>
    );
  }
}

export default App;
