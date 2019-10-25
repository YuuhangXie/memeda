import React, { Component } from 'react'

import storage from "utils/storage";

import TaAccountUI from "./TaAccountUI";

import connect from "./connect";

@connect
class TaAccountContainer extends Component {
  state = {
    username: storage.get("userInfo").bind_info.nickname,
    sex: storage.get("userInfo").bind_info.sex,
    usercode: storage.get("userInfo").bind_info.lover_code,
    head_address: storage.get("userInfo").bind_info.head_img,
    cover: false
  }
  render() {
    return (
      <TaAccountUI
        goBack={this.handleGoBack.bind(this)}
        userInfo={this.state}
        remove={this.handleClickMore.bind(this)}
        cover={this.state.cover}
        notCover={this.handleRemoveCover.bind(this)}
        clickRemoveBtn={this.handleClickRemoveBtn.bind(this)}
      >
      </TaAccountUI>
    )
  }

  handleGoBack() {
    this.props.history.goBack();
  }

  handleClickMore() {
    // alert("解除关系");
    this.setState({
      cover: true
    });
  }

  handleRemoveCover() {
    // console.log("remove cover");
    this.setState({
      cover: false
    });
  }

  handleClickRemoveBtn() {
    this.props.removeRelationship("13520611623");
    alert("goto login page");
  }
}

export default TaAccountContainer