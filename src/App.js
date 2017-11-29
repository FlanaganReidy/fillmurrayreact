import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main.js'
import Navigation from './components/navigation.js'
import MurrayForm from './components/murrayform.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Main />
        <MurrayForm />
      </div>
    );
  }
}

export default App;
