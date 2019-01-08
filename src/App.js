import React, { Component } from 'react';
import Form from './components/Form'
import Data from './components/Data'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form/>
        <Data/>
      </div>
    );
  }
}

export default App;
