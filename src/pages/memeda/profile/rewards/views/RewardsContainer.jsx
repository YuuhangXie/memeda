import React, { Component } from 'react'

import RewardsUI from "./RewardsUI";

export default class Rewards extends Component {
  state = {
    received1: true,
    received2: false,
    received3: false,
    received4: false,
    received5: false
  }
  render() {
    return (
      <RewardsUI
        goBack={this.handleGoBack.bind(this)}
        missionList={[
          "每日聊天领取红包",
          "邀请好友领取红包",
          "每充值恋爱基金一次领取红包",
          "每日种树领取红包"
        ]}
        received={this.state}
        haveReceivedRewards={this.handleReceived.bind(this)}
      ></RewardsUI>
    )
  }

  handleGoBack() {
    this.props.history.goBack();
  }

  handleReceived() {}
}
