import React from 'react';

import StyledNavbar from "./StyledNavbar";

import arrow from "images/profile/arrow.png";

export default (props) => {
  return (
    <StyledNavbar>
      <img className="goback" src={arrow} alt=""/>
      <div className="navTitle">{props.navTitle}</div>
    </StyledNavbar>
  )
}
