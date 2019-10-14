import React, { Component } from 'react'

import RewardsUI from "./RewardsUI";

export default class Rewards extends Component {
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
      ></RewardsUI>
    )
  }

  handleGoBack() {
    this.props.history.goBack();
  }
}
