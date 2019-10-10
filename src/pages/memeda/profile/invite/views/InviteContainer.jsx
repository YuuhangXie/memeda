import React, { Component } from 'react'

import StyledInvite from "./StyledInvite";

import Navbar from "pages/index/profile/components/nav_bar/Navbar";

export default class Invite extends Component {
  render() {
    return (
      <StyledInvite>
        <Navbar 
          navTitle="邀请好友"
          goBack={this.handleGoBack.bind(this)}
        ></Navbar>
      </StyledInvite>
    )
  }

  handleGoBack() {
    this.props.history.goBack();
  }
}
