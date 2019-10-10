import React, { Component } from 'react'

import StyledRings from "./StyledRings";

import Navbar from "pages/index/profile/components/nav_bar/Navbar";

export default class Rings extends Component {
  render() {
    return (
      <StyledRings>
        <Navbar 
          navTitle="对戒"
          goBack={this.handleGoBack.bind(this)}
        ></Navbar>
      </StyledRings>
    )
  }

  handleGoBack() {
    this.props.history.goBack();
  }
}
