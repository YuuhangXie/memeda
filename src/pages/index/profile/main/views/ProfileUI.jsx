import React from 'react';

import StyledProfile from "./StyledProfile";

import Navbar from "pages/index/profile/components/nav_bar/Navbar";

export default (props) => {
  return (
    <StyledProfile>
      <Navbar navTitle="我" />
    </StyledProfile>
  )
}
