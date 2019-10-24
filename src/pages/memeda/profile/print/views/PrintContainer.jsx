import React, { Component } from 'react'

import PrintUI from "./PrintUI";

export default class Print extends Component {
  render() {
    return (
      <PrintUI
        goBack={this.handleGoBack.bind(this)}
      >
      </PrintUI>
    )
  }

  handleGoBack() {
    this.props.history.goBack();
  }
}
