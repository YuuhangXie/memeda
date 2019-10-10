import React, { Component } from 'react'

import StyledTaAccount from "./StyledTaAccount";

import Navbar from "pages/index/profile/components/nav_bar/Navbar";

export default class TaAccount extends Component {
  render() {
    return (
      <StyledTaAccount>
        <Navbar 
          navTitle="另一半账户"
          goBack={this.handleGoBack.bind(this)}
          more={true}
          remove={this.handleRemoveRelationship}
        ></Navbar>
      </StyledTaAccount>
    )
  }

  handleGoBack() {
    this.props.history.goBack();
  }

  handleRemoveRelationship() {
    alert("解除关系");
  }
}
