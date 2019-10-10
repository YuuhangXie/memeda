import React, { Component } from 'react';

import ProfileUI from "./ProfileUI";

import connect from "./connect";    //导入修饰器

@connect
class ProfileContainer extends Component {
  render() {
    // console.log(this.props.userList.toJS());
    return (
      <ProfileUI
        users={this.props.userList.toJS()}
        clickJump={this.handleClickJump.bind(this)}
        goBack={this.handleGoBack.bind(this)}
      >
      </ProfileUI>
    )
  }

  componentDidMount() {
    this.props.loadUsersInfo();
  }

  handleClickJump(path) {
    this.props.history.push(`/memeda/profile${path}`);
  }

  handleGoBack() {
    this.props.history.goBack();
  }
}

export default  ProfileContainer;