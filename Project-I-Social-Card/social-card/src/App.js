/*jshint esversion: 6 */

import React from 'react';
import './App.css';
import HeaderContainer from "./components/HeaderComponents/HeaderContainer.js";
import CardContainer from "./components/CardComponents/CardContainer.js";

const App = () => {
  return (
    <div className="App">
      <div>
        <HeaderContainer />
        <CardContainer />
      </div>
    </div>
  );
};

export default App;
