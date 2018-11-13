import React, { Component } from 'react';
import './App.css';
import MemeForm from './MemeForm'
import Display from './Display'

class App extends Component {
  render() {
    return (
      <div className="App">
       <MemeForm/>
       <Display/>
      </div>
    );
  }
}

export default App;
