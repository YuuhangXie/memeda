import React from 'react'

import StyledRings from "./StyledRings";

import Navbar from "pages/index/profile/components/nav_bar/Navbar";

export default (props) => {
  return (
    <StyledRings>
      <Navbar
        navTitle="对戒"
        goBack={props.goBack}
      ></Navbar>
    </StyledRings>
  );
}