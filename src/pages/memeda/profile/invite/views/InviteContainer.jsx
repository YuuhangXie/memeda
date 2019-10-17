import React, { Component } from 'react'

import InviteUI from "./InviteUI";

import storage from "utils/storage";

import Clipboard from "clipboard";

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

  componentDidMount() {
    let clipboard = new Clipboard('.copy-btn');
    clipboard.on('success', function (e) {
      // console.info('Action:', e.action);
      // console.info('Text:', e.text);
      // console.info('Trigger:', e.trigger);
      e.clearSelection();
      alert("复制成功");
    });
    clipboard.on('error', function (e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
    });
  }

  handleGoBack() {
    this.props.history.goBack();
  }

  handleCopy(code) {
    // navigator.clipboard.writeText(code);
    // alert("已复制到剪切版");
  }
}
