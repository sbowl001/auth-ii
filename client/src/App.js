import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Users from './Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Authentication using JWTs</h1>
        </header>
        <Route path ="/" component = {Home} />
        <Route path ="/register" component ={Register}/>
        <Route path ="login" component ={Login}/>
        <Route path = "/users" component ={Users} />
      </div>
    );
  }
}

export default App;
