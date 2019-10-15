import React, { Component } from 'react'

import storage from "utils/storage";

import MyAccountUI from "./MyAccountUI";

import "./modal.css";   //重置Modal组件样式

import connect from "./connect";

@connect
class MyAccountContainer extends Component {
  state = {
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
        userInfo={this.props.userInfo}
        cover={this.state.cover}
        type={this.state.type}
        clickCover={this.handleClickCover.bind(this)}
        confirmName={this.handleConfirmName.bind(this)}
      >
      </MyAccountUI>
    )
  }

  componentDidMount() {
    if(storage.get("userInfo")) {
      this.props.getUsersInfoFromStorage();
    }
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
      this.props.changeUsersInfo("13520611622", {
        sex
      });
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
        this.props.changeUsersInfo("13520611622", {
          nickname: name
        });
      });
    }
    else {
      alert("昵称不能为空!");
    }
  }
}

export default  MyAccountContainer