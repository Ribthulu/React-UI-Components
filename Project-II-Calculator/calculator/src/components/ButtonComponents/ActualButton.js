/*jshint esversion: 6 */


import React, { Component } from 'react';
import './Button.css';

class ActualButton extends Component {
  isOperator = value => {
    return !isNaN(value) || value === "." || value === "=";
  };

  render () {
    return(
      <div className={`button ${this.isOperator
        (this.props.children) ? "" : "operator"}`}
        onClick={() => this.props.handleClick(this.props.children)}
        >
        {this.props.children}
      </div>
    )
  }
}

export default ActualButton;
