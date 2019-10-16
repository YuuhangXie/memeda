import React, { Component } from 'react'

import InviteUI from "./InviteUI";

import storage from "utils/storage";

export default class Invite extends Component {
  render() {
    return (
      <InviteUI
        goBack={this.handleGoBack.bind(this)}
        copy={this.handleCopy.bind(this)}
        invite_code={storage.get("userInfo").invite_code}
      >
      </InviteUI>
    )
  }

  handleGoBack() {
    this.props.history.goBack();
  }

  handleCopy(code) {
    navigator.clipboard.writeText(code);
    alert("已复制到剪切版");
  }
}
