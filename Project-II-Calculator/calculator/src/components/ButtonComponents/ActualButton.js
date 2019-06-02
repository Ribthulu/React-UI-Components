import React, { Component } from 'react';
import './Button.css';

class ActualButton extends Component {
  isOperator = value => {
    return !isNaN(value) || value === "." || value === "=";
  }

  render () {
    return(
      <div className={`button ${this.isOperator
        (this.props.children) ? "" : "operator"}`}>
        {this.props.children}
      </div>
    )
  }
}

export default ActualButton;
