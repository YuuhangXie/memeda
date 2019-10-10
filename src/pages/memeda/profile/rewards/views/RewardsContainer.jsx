import React, { Component } from 'react'

import StyledRewards from "./StyledRewards";

import Navbar from "pages/index/profile/components/nav_bar/Navbar";

export default class Rewards extends Component {
  render() {
    return (
      <StyledRewards>
        <Navbar 
          navTitle="任务奖励"
          goBack={this.handleGoBack.bind(this)}
        ></Navbar>
      </StyledRewards>
    )
  }

  handleGoBack() {
    this.props.history.goBack();
  }
}
