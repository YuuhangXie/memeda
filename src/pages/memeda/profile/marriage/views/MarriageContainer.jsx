import React, { Component } from 'react'

import MarriageUI from "./MarriageUI";

export default class Marriage extends Component {
  render() {
    return (
      <MarriageUI
        goBack={this.handleGoBack.bind(this)}
      >
      </MarriageUI>
    )
  }

  handleGoBack() {
    this.props.history.goBack();
  }
}
