import React, { Component } from 'react'

import storage from "utils/storage";

import MyAccountUI from "./MyAccountUI";

export default class MyAccount extends Component {
  state = {
    userInfo: storage.get("userlist")[0]
  }
  render() {
    return (
      <MyAccountUI
        goBack={this.handleGoBack.bind(this)}
        onlyClick={this.handleChangeHead}
        changeSex={this.handleChangeSex.bind(this)}
        userInfo={this.state.userInfo}
      >
      </MyAccountUI>
    )
  }

  handleGoBack() {
    this.props.history.goBack();
  }

  handleChangeHead() {
    alert("更换头像或昵称");
  }

  handleChangeSex(sex) {
    this.setState((prevState) => {
      return {
        ...prevState.userInfo,
        sex
      }
    }, () => {
      // alert("更改性别为" + sex);
      console.log(this.state.userInfo);
      this.forceUpdate();
    });
  }
}