/*jshint esversion: 6 */

import React from 'react';
import './Header.css';
import HeaderContent from "./HeaderContent.js";
import HeaderTitle from "./HeaderTitle.js";
import ImageThumbnail from "./ImageThumbnail.js";

const HeaderContainer = () => {
  return (
    <div className="HeaderContainer">
      <ImageThumbnail />
      <HeaderTitle />
      <HeaderContent />
    </div>
  );
};

export default HeaderContainer;
