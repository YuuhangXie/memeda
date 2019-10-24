import React from 'react'

import StyledPrint from "./StyledPrint";

import Navbar from "pages/index/profile/components/nav_bar/Navbar";

import print1 from "images/profile/print/print1.png";
import print2 from "images/profile/print/print2.png";

export default (props) => {
  return (
    <StyledPrint>
      <Navbar
        navTitle="打印"
        goBack={props.goBack}
      ></Navbar>

      <div>10张照片免费打印</div>
      <img src={print1} alt=""/>
      <img src={print2} alt=""/>
    </StyledPrint>
  );
}