import React, { Component } from 'react';

import ProfileUI from "./ProfileUI";

import connect from "./connect";    //导入修饰器

import storage from "utils/storage";

@connect
class ProfileContainer extends Component {
  render() {
    // console.log(this.props.userList.toJS());
    return (
      <ProfileUI
        users={this.props.userInfo}
        clickJump={this.handleClickJump.bind(this)}
        goBack={this.handleGoBack.bind(this)}
      >
      </ProfileUI>
    )
  }

  componentDidMount() {
    if(storage.get("userInfo")) {
      this.props.getUsersInfoFromStorage();
      this.forceUpdate();
    }
    else {
      this.props.loadUsersInfo("13520611622");
    }
  }

  handleClickJump(path) {
    this.props.history.push(`/memeda/profile${path}`);
  }

  handleGoBack() {
    this.props.history.goBack();
  }
}

export default  ProfileContainer;