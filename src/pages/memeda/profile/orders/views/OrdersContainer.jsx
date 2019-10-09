import React, { Component } from 'react'

import StyledOrders from "./StyledOrders";

import Navbar from "pages/index/profile/components/nav_bar/Navbar";

export default class Orders extends Component {
  render() {
    return (
      <StyledOrders>
        <Navbar 
          navTitle="我的订单"
          goBack={this.handleGoBack.bind(this)}
        ></Navbar>
      </StyledOrders>
    )
  }

  handleGoBack() {
    this.props.history.goBack();
  }
}
