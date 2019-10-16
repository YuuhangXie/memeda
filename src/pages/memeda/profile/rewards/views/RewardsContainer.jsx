import React, { Component } from 'react'

import RewardsUI from "./RewardsUI";

import storage from "utils/storage";

export default class Rewards extends Component {
  state = {
    login_reward: storage.get("login_reward") || false,
    chat_reward: false,
    showReward: "notshow"
  }
  render() {
    return (
      <RewardsUI
        goBack={this.handleGoBack.bind(this)}
        missionList={[
          "邀请好友领取红包",
          "每充值恋爱基金一次领取红包",
          "每日种树领取红包"
        ]}
        received={this.state}
        haveReceived={this.handleReceived.bind(this)}
        open={this.handleOpenHB.bind(this)}
        opened={this.handleOpenedHB.bind(this)}
      ></RewardsUI>
    )
  }

  handleGoBack() {
    this.props.history.goBack();
  }

  handleReceived(title) {
    if(title === "领取") {
      this.setState({
        showReward: "notOpen"
      });
    } else if(title === "去完成") {
      alert("去完成!");
    } else {
      alert("已经领取过了,请明天再来领取!");
    }
  }

  handleOpenHB() {
    this.setState({
      showReward: "opened"
    });
  }

  handleOpenedHB() {
    this.setState({
      showReward: "notshow",
      login_reward: true
    });
    storage.set("login_reward", true);
  }
}
