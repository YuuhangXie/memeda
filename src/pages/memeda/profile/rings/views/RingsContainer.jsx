import React, { Component } from 'react'

import RingsUI from "./RingsUI";

export default class Rings extends Component {
  render() {
    return (
      <RingsUI
        goBack={this.handleGoBack.bind(this)}
      >
      </RingsUI>
    )
  }

  handleGoBack() {
    this.props.history.goBack();
  }
}
