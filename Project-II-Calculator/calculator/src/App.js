/*jshint esversion: 6 */

import React, { Component } from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActualButton from './components/ButtonComponents/ActualButton';
import Clear from './components/ButtonComponents/ActionButton';
import Zero from './components/ButtonComponents/NumberButton';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: "",
    };
  }

  addToInput = value => {
  this.setState ({input: this.state.input + value });
};

  render() {
    return(
      <div className="App">
        <div className="display">
          <CalculatorDisplay />
          <div className="row">
            <Clear>Clear</Clear>
            <ActualButton className="button" handleClick={this.addToInput}>/</ActualButton>
          </div>
          <div className="row">
            <ActualButton className="button">7</ActualButton>
            <ActualButton className="button">8</ActualButton>
            <ActualButton className="button">9</ActualButton>
            <ActualButton className="button">*</ActualButton>
          </div>
          <div className="row">
            <ActualButton className="button">4</ActualButton>
            <ActualButton className="button">5</ActualButton>
            <ActualButton className="button">6</ActualButton>
            <ActualButton className="button">-</ActualButton>
          </div>
          <div className="row">
          <ActualButton className="button">1</ActualButton>
          <ActualButton className="button">2</ActualButton>
          <ActualButton className="button">3</ActualButton>
          <ActualButton className="button">+</ActualButton>
          </div>
          <div className="row">
            <Zero>0</Zero>
            <ActualButton className="button">=</ActualButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
