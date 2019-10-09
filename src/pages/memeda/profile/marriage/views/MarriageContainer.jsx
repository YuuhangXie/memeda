import React, { Component } from 'react'

import StyledMarriage from "./StyledMarriage";

import Navbar from "pages/index/profile/components/nav_bar/Navbar";

export default class Marriage extends Component {
  render() {
    return (
      <StyledMarriage>
        <Navbar 
          navTitle="爱情测试"
          goBack={this.handleGoBack.bind(this)}
        ></Navbar>
      </StyledMarriage>
    )
  }

  handleGoBack() {
    this.props.history.goBack();
  }
}
