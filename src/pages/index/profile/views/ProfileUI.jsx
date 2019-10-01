import React from 'react';

import StyledProfile from "./StyledProfile";

import Navbar from "../components/nav_bar/Navbar";

export default (props) => {
  return (
    <StyledProfile>
      <Navbar navTitle={props.navTitle} />
    </StyledProfile>
  )
}
