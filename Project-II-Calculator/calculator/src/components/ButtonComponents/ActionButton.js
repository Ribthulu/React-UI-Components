/*jshint esversion: 6 */

import React, { Component } from 'react';
import './Button.css';

class ActionButton extends Component {
  render () {
    return(
      <div className="ActionButton">
        {this.props.children}
      </div>
    )
  }
}

export default ActionButton;
