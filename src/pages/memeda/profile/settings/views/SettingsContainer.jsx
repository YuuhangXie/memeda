import React, { Component } from 'react'

import SettingsUI from "./SettingsUI";

export default class Settings extends Component {
  render() {
    return (
      <SettingsUI
        goBack={this.handleGoBack.bind(this)}
      >
      </SettingsUI>
    )
  }

  handleGoBack() {
    this.props.history.goBack();
  }
}
