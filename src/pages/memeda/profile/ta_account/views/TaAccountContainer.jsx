import React, { Component } from 'react'

import storage from "utils/storage";

import TaAccountUI from "./TaAccountUI";

export default class TaAccountContainer extends Component {
  state = {
    userInfo: storage.get("userlist")[1],
    cover: false
  }
  render() {
    return (
      <TaAccountUI
        goBack={this.handleGoBack.bind(this)}
        userInfo={this.state.userInfo}
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
    alert("goto login page");
  }
}
