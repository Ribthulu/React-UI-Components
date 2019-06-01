/*jshint esversion: 6 */

import React from 'react';
import './Card.css';
import CardBanner from "./CardBanner.js";
import CardContent from "./CardContent.js";

const CardContainer = () => {
  return (
    <div class="CardContainer">
      <CardBanner />
      <h1>Get Started with React</h1>
      <p>React makes it painless to creat interavice UIs. Design simple views for each starte in your application</p>
      <CardContent />
    </div>
  );
};

export default CardContainer;
