/*jshint esversion: 6 */

import React, { Component } from 'react';
import './Button.css';

class Clear extends Component {
  render () {
    return(
      <div className="Clear">
        {this.props.children}
      </div>
    )
  }
}

class Zero extends Component {
  render () {
    return(
      <div className="Zero">
        {this.props.children}
      </div>
    )
  }
}

export default Clear;
