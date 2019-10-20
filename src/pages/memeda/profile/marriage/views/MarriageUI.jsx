import React from 'react'

import StyledMarriage from "./StyledMarriage";

import Navbar from "pages/index/profile/components/nav_bar/Navbar";

import test1 from "images/profile/marriage/test1.png";
import test2 from "images/profile/marriage/test2.png";
import test3 from "images/profile/marriage/test3.png";

export default (props) => {
  return (
    <StyledMarriage>
      <Navbar
        navTitle="爱情测试"
        goBack={props.goBack}
      ></Navbar>

      <div className="content">
        <img src={test1} alt=""/>
        <div>
          <span>748971人已测</span>
          <span>立即测试</span>
        </div>
        <img src={test2} alt=""/>
        <div>
          <span>54739人已测</span>
          <span>立即测试</span>
        </div>
        <img src={test3} alt=""/>
        <div>
          <span>34919人已测</span>
          <span>立即测试</span>
        </div>
      </div>
    </StyledMarriage>
  );
}