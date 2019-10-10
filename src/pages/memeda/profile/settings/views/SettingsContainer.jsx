import React, { Component } from 'react'

import StyledSettings from "./StyledSettings";

import Navbar from "pages/index/profile/components/nav_bar/Navbar";

export default class Settings extends Component {
  render() {
    return (
      <StyledSettings>
        <Navbar 
          navTitle="设置"
          goBack={this.handleGoBack.bind(this)}
        ></Navbar>
      </StyledSettings>
    )
  }

  handleGoBack() {
    this.props.history.goBack();
  }
}
