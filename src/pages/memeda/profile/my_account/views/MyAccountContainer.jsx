import React, { Component } from 'react'

import storage from "utils/storage";

import MyAccountUI from "./MyAccountUI";

import "./modal.css";   //重置Modal组件样式

export default class MyAccountContainer extends Component {
  state = {
    ...storage.get("userlist")[0],
    cover: false,
    type: ""
  }
  render() {
    return (
      <MyAccountUI
        goBack={this.handleGoBack.bind(this)}
        changeHead={this.handleChangeHead.bind(this)}
        changeName={this.handleChangeName.bind(this)}
        changeSex={this.handleChangeSex.bind(this)}
        userInfo={this.state}
        clickCover={this.handleClickCover.bind(this)}
        confirmName={this.handleConfirmName.bind(this)}
      >
      </MyAccountUI>
    )
  }

  handleGoBack() {
    this.props.history.goBack();
  }

  handleChangeHead() {
    // alert("更换头像");
    this.setState({
      type: "operation",
      cover: true
    });
  }

  handleChangeName() {
    // alert("更换昵称");
    this.setState({
      type: "prompt",
      cover: true
    });
  }

  handleChangeSex(sex) {
    this.setState({
      sex
    }, () => {
      // alert("更改性别为" + sex);
      storage.set("userlist", [
        {
          username: this.state.username,
          usercode: this.state.usercode,
          head_address: this.state.head_address,
          sex: this.state.sex
        },
        storage.get("userlist")[1]
      ]);
    });
  }

  handleClickCover() {
    this.setState({
      cover: false
    });
  }

  handleConfirmName(name) {
    if(name) {
      this.setState({
        username: name,
        cover: false
      }, () => {
        storage.set("userlist", [
          {
            username: this.state.username,
            usercode: this.state.usercode,
            head_address: this.state.head_address,
            sex: this.state.sex
          },
          storage.get("userlist")[1]
        ]);
      });
    }
    else {
      alert("昵称不能为空!");
      // this.setState({
      //   cover: false
      // });
    }
  }
}