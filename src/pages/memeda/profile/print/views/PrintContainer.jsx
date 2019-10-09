import React, { Component } from 'react'

import StyledPrint from "./StyledPrint";

import Navbar from "pages/index/profile/components/nav_bar/Navbar";

export default class Print extends Component {
  render() {
    return (
      <StyledPrint>
        <Navbar 
          navTitle="打印"
          goBack={this.handleGoBack.bind(this)}
        ></Navbar>
      </StyledPrint>
    )
  }

  handleGoBack() {
    this.props.history.goBack();
  }
}
